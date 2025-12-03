export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      cultura_actividades: {
        Row: {
          activo: boolean
          alt_text: string | null
          created_at: string
          descripcion: string
          icono: string
          id: string
          imagen_position: string | null
          imagen_url: string | null
          orden: number
          slug: string
          titulo: string
          updated_at: string
        }
        Insert: {
          activo?: boolean
          alt_text?: string | null
          created_at?: string
          descripcion: string
          icono?: string
          id?: string
          imagen_position?: string | null
          imagen_url?: string | null
          orden?: number
          slug: string
          titulo: string
          updated_at?: string
        }
        Update: {
          activo?: boolean
          alt_text?: string | null
          created_at?: string
          descripcion?: string
          icono?: string
          id?: string
          imagen_position?: string | null
          imagen_url?: string | null
          orden?: number
          slug?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: []
      }
      inscripciones: {
        Row: {
          created_at: string
          email: string
          id: string
          interes: string
          mensaje: string
          nombre: string
          sede_id: string | null
          telefono: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          interes: string
          mensaje: string
          nombre: string
          sede_id?: string | null
          telefono: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          interes?: string
          mensaje?: string
          nombre?: string
          sede_id?: string | null
          telefono?: string
        }
        Relationships: [
          {
            foreignKeyName: "inscripciones_sede_id_fkey"
            columns: ["sede_id"]
            isOneToOne: false
            referencedRelation: "sedes"
            referencedColumns: ["id"]
          },
        ]
      }
      invitations: {
        Row: {
          created_at: string
          email: string
          email_status: string
          expires_at: string
          id: string
          invited_by: string | null
          role: Database["public"]["Enums"]["app_role"]
          status: string
          token: string
        }
        Insert: {
          created_at?: string
          email: string
          email_status?: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          status?: string
          token?: string
        }
        Update: {
          created_at?: string
          email?: string
          email_status?: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role?: Database["public"]["Enums"]["app_role"]
          status?: string
          token?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          nombre: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          nombre: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          nombre?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      sedes: {
        Row: {
          ciudad: string
          created_at: string
          departamento: string
          direccion: string
          distrito: string | null
          email: string | null
          es_principal: boolean
          facebook: string | null
          google_maps_url: string | null
          id: string
          instagram: string | null
          nombre: string
          tiktok: string | null
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          ciudad: string
          created_at?: string
          departamento?: string
          direccion: string
          distrito?: string | null
          email?: string | null
          es_principal?: boolean
          facebook?: string | null
          google_maps_url?: string | null
          id?: string
          instagram?: string | null
          nombre: string
          tiktok?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          ciudad?: string
          created_at?: string
          departamento?: string
          direccion?: string
          distrito?: string | null
          email?: string | null
          es_principal?: boolean
          facebook?: string | null
          google_maps_url?: string | null
          id?: string
          instagram?: string | null
          nombre?: string
          tiktok?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      voluntariado_fotos: {
        Row: {
          activo: boolean | null
          categoria: string
          created_at: string
          descripcion: string | null
          id: string
          imagen_url: string
          orden: number | null
          sede_id: string | null
          titulo: string
          updated_at: string
        }
        Insert: {
          activo?: boolean | null
          categoria: string
          created_at?: string
          descripcion?: string | null
          id?: string
          imagen_url: string
          orden?: number | null
          sede_id?: string | null
          titulo: string
          updated_at?: string
        }
        Update: {
          activo?: boolean | null
          categoria?: string
          created_at?: string
          descripcion?: string | null
          id?: string
          imagen_url?: string
          orden?: number | null
          sede_id?: string | null
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "voluntariado_fotos_sede_id_fkey"
            columns: ["sede_id"]
            isOneToOne: false
            referencedRelation: "sedes"
            referencedColumns: ["id"]
          },
        ]
      }
      voluntariado_programas: {
        Row: {
          actividades: string[] | null
          activo: boolean
          alt_text: string | null
          created_at: string
          descripcion: string
          icono: string
          id: string
          imagen_position: string | null
          imagen_url: string | null
          orden: number
          slug: string
          titulo: string
          updated_at: string
        }
        Insert: {
          actividades?: string[] | null
          activo?: boolean
          alt_text?: string | null
          created_at?: string
          descripcion: string
          icono?: string
          id?: string
          imagen_position?: string | null
          imagen_url?: string | null
          orden?: number
          slug: string
          titulo: string
          updated_at?: string
        }
        Update: {
          actividades?: string[] | null
          activo?: boolean
          alt_text?: string | null
          created_at?: string
          descripcion?: string
          icono?: string
          id?: string
          imagen_position?: string | null
          imagen_url?: string | null
          orden?: number
          slug?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_invitation_by_token: {
        Args: { invitation_token: string }
        Returns: {
          email: string
          expires_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          status: string
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
    },
  },
} as const
