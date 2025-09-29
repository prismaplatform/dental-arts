export async function POST(request) {
  try {
    const body = await request.json();
    
    const response = await fetch('http://adminpanel.dentalarts.hu/api/form/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return Response.json(data, { status: response.status });

  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json({
      success: false, 
      message: 'Connection failed'
    }, { status: 500 });
  }
}