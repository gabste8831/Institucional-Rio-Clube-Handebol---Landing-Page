import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const { Instagrapi } = await import('insta-fetcher')
    const ig = new Instagrapi()

    // Buscar posts do perfil
    const profile = await ig.getProfile('rioclube_handebol')
    const posts = await ig.getPosts('rioclube_handebol')

    // Pegar apenas os últimos posts com as informações necessárias
    const formattedPosts = posts.slice(0, 6).map((post: any) => ({
      id: post.id,
      url: post.url || post.shortcode,
      caption: post.caption || '',
      image: post.image || post.display_url,
      likes: post.likes || 0,
      comments: post.comments_count || 0,
      timestamp: post.timestamp || new Date().toISOString(),
    }))

    return NextResponse.json({
      success: true,
      posts: formattedPosts,
      profile: {
        username: profile.username,
        fullName: profile.full_name,
        bio: profile.biography,
        followers: profile.follower_count,
        following: profile.following_count,
        profilePic: profile.profile_pic_url,
      },
    })
  } catch (error) {
    console.error('Erro ao buscar posts do Instagram:', error)
    
    // Retornar dados mock em caso de erro
    return NextResponse.json({
      success: false,
      error: 'Erro ao buscar posts',
      posts: [],
    }, { status: 500 })
  }
}
