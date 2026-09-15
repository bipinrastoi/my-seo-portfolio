export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string
          content: string
          cover_image: string | null
          tags: string[]
          published: boolean
          reading_time_minutes: number
          published_at: string
          created_at: string
          updated_at: string
        }
      }
      case_studies: {
        Row: {
          id: string
          title: string
          slug: string
          client_name: string | null
          summary: string
          challenge: string
          solution: string
          results_metrics: Json
          tech_stack: string[]
          featured: boolean
          cover_image: string | null
          live_url: string | null
          github_url: string | null
          created_at: string
          updated_at: string
        }
      }
      messages: {
        Row: {
          id: string
          name: string
          email: string
          services_requested: string[] | null
          message: string
          read: boolean
          created_at: string
        }
      }
    }
  }
}