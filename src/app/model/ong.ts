export interface ONG{
  name: string | null,
  email: string | null,
  whatsapp: string | null,
  city: string | null,
  uf: string | null,
}

export interface Case {
  "id": number,
	"title": string,
	"description": string,
	"value": number,
	"ong_id": string
}
