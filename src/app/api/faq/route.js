export async function getFaq(lang) {
  try {
    const response = await fetch(
      `https://tester10.prismaweb.ro/api/faq/get_faq.php?lang=${lang}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch blogs: ${response.status}`)
    }

    const json = await response.json()

    if (!json.success || !json.data) {
      throw new Error('Unexpected response structure')
    }

    return json.data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}
