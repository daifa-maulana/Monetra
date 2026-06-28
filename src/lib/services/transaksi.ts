import { supabase } from "../supabase";
import { Transaksi, Kategori, RecapItem } from "../types";

export async function getCategories(): Promise<Kategori[]> {
  try {
    const { data, error } = await supabase
      .from("kategori")
      .select("*")
      .order("urutan", { ascending: true });

    if (error) throw error;
    return data as Kategori[];
  } catch (err) {
    console.error("Error in getCategories:", err);
    return [];
  }
}

export async function addTransaction(transaction: Omit<Transaksi, "id" | "created_at" | "updated_at">): Promise<Transaksi | null> {
  try {
    const { data, error } = await supabase
      .from("transaksi")
      .insert(transaction)
      .select()
      .single();

    if (error) throw error;
    return data as Transaksi;
  } catch (err) {
    console.error("Error in addTransaction:", err);
    return null;
  }
}

export async function getRecapHarian(userId: string): Promise<RecapItem[]> {
  try {
    const { data, error } = await supabase
      .from("recap_harian")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;
    return data as RecapItem[];
  } catch (err) {
    console.error("Error in getRecapHarian:", err);
    return [];
  }
}

export async function getRecapBulanan(userId: string): Promise<RecapItem[]> {
  try {
    const { data, error } = await supabase
      .from("recap_bulanan")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;
    return data as RecapItem[];
  } catch (err) {
    console.error("Error in getRecapBulanan:", err);
    return [];
  }
}

export async function getRecapTahunan(userId: string): Promise<RecapItem[]> {
  try {
    const { data, error } = await supabase
      .from("recap_tahunan")
      .select("*")
      .eq("user_id", userId);

    if (error) throw error;
    return data as RecapItem[];
  } catch (err) {
    console.error("Error in getRecapTahunan:", err);
    return [];
  }
}

// Fetch list of recent transactions directly
export async function getRecentTransactions(userId: string, limit = 10): Promise<any[]> {
  try {
    const { data, error } = await supabase
      .from("transaksi")
      .select(`
        id,
        jumlah,
        catatan,
        tanggal,
        kategori:kategori_id(nama, icon_name)
      `)
      .eq("user_id", userId)
      .order("tanggal", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error("Error in getRecentTransactions:", err);
    return [];
  }
}
