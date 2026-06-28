export interface Profile {
  id: string;
  nama: string | null;
  email: string | null;
  foto_url: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface Rekening {
  id: string;
  user_id: string;
  nama: string;
  saldo: number;
  limit_pengeluaran?: number;
  created_at?: string;
  updated_at?: string;
}

export interface Kategori {
  id: string;
  user_id: string | null;
  nama: string;
  icon_name: string | null;
  urutan: number;
  created_at?: string;
}

export interface Transaksi {
  id: string;
  user_id: string;
  rekening_id: string | null;
  kategori_id: string | null;
  jumlah: number;
  catatan: string | null;
  tanggal: string; // YYYY-MM-DD
  created_at?: string;
  updated_at?: string;
}

export interface RecapItem {
  user_id: string;
  tanggal?: string;
  bulan?: string;
  tahun?: string;
  kategori: string | null;
  icon_name: string | null;
  total: number;
}
