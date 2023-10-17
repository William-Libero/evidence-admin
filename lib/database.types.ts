/* eslint-disable prettier/prettier */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      ready_to_delivery_boards: {
        Row: {
          // the data expected from .select()
          id: number;
          img: string;
          img2: string;
          img3: string;
          img4: string;
          img5: string;
          img6: string;
          img7: string;
          img8: string;
          type: string;
          size: string;
          width: string;
          fluctuation: string;
          volume: string;
          block: string;
        };
      };
    };
  };
}
