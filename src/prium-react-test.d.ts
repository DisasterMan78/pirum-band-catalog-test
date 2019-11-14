// Type definitions for my-favorite-library x.x

export as namespace PriumReactTest;

export interface AlbumType {
  band: string;
  album: string;
  tracks: [ string ];
}

export interface BandType {
  band: string;
  albums: [ AlbumType ];
}

export interface BandsType {
  [key:string]: BandType;
}
