export interface IAsset {
  base64?: string;
  uri?: string;
  width?: number;
  height?: number;
  fileSize?: number;
  type?: string;
  fileName?: string;
  duration?: number;
  bitrate?: number;
  timestamp?: string;
  id?: string;
}

export interface IMyOutfits {
  coat?: string;
  top?: string;
  bottom?: string;
  score?: null | number;
}