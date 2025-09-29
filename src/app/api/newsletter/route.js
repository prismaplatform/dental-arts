export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Sending to PHP:', body);
    
    // Forward the request to your PHP API
    const response = await fetch('http://adminpanel.dentalarts.hu/api/newsletter/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log('PHP response status:', response.status);
    
    // Get response text first
    const responseText = await response.text();
    console.log('PHP response text:', responseText);
    
    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText);
      console.log('Parsed PHP data:', data);
    } catch (jsonError) {
      console.error('Invalid JSON from PHP API:', responseText);
      
      // Handle common cases based on status code
      if (response.status === 409) {
        return Response.json({
          success: false,
          message: "already_subscribed_error",
          statusCode: 409
        });
      }
      
      if (response.status === 200 || response.status === 201) {
        return Response.json({
          success: true,
          message: "Successfully subscribed to newsletter!"
        });
      }
      
      return Response.json({
        success: false,
        message: "An error occurred while processing your subscription. Please try again."
      });
    }

    // FONTOS: Add hozzá a statusCode-ot mindig
    data.statusCode = response.status;
    
    // Ha a PHP 409-et küld de success: true van a JSON-ban, javítsuk
    if (response.status === 409) {
      data.success = false;
      data.message = "already_subscribed_error";
    }
    
    console.log('Final data to return:', data);
    
    return Response.json(data);

  } catch (error) {
    console.error('Newsletter API Error:', error);
    return Response.json({
      success: false, 
      message: 'Connection failed. Please check your internet connection and try again.'
    });
  }
}