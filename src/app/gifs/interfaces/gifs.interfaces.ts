export type GifsResponse = {
  data: GifsData[];
  pagination: Pagination;
  meta: Meta;
};

export type GifsData = {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: Username;
  source: string;
  title: string;
  rating: Rating;
  content_url: string;
  source_tld: SourceTLD;
  source_post_url: string;
  is_sticker: number;
  import_datetime: Date;
  trending_datetime: Date | TrendingDatetimeEnum;
  images: Images;
  user: User;
  analytics_response_payload: string;
  analytics: Analytics;
};

export type Analytics = {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
};

export type Onclick = {
  url: string;
};

export type Images = {
  original: FixedHeight;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
};

export type FixedHeight = {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
};

export enum Rating {
  G = 'g',
}

export enum SourceTLD {
  Empty = '',
  WWWTwitchTv = 'www.twitch.tv',
}

export enum TrendingDatetimeEnum {
  The00000000000000 = '0000-00-00 00:00:00',
}

export enum Type {
  GIF = 'gif',
}

export type User = {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: Username;
  display_name: DisplayName;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
};

export enum DisplayName {
  AtitKharel = 'Atit Kharel',
  VALORANTEsports = 'VALORANT Esports',
  Valorant = 'VALORANT',
  Xbox = 'Xbox',
}

export enum Username {
  Atitkharel = 'atitkharel',
  Playvalorant = 'playvalorant',
  ValorantEsports = 'Valorant_Esports',
  Xbox = 'xbox',
}

export type Meta = {
  status: number;
  msg: string;
  response_id: string;
};

export type Pagination = {
  total_count: number;
  count: number;
  offset: number;
};
