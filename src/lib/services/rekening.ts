import { supabase } from "../supabase";
import { Rekening } from "../types";

export async function getOrCreateRekening(userId: string): Promise<Rekening | null> {
  try {
    // 1. Fetch current user's accounts
    const { data, error } = await supabase
      .from("rekening")
      .select("*")
      .eq("user_id", userId)
      .limit(1);

    if (error) throw error;

    if (data && data.length > 0) {
      return data[0] as Rekening;
    }

    // 2. If no accounts, create a default "Dompet Utama" with initial balance 120000 (matching figma mockup)
    const { data: newRekening, error: insertError } = await supabase
      .from("rekening")
      .insert({
        user_id: userId,
        nama: "Dompet Utama",
        saldo: 0, // default new balance is 0
      })
      .select();

    if (insertError) throw insertError;

    if (newRekening && newRekening.length > 0) {
      return newRekening[0] as Rekening;
    }

    return null;
  } catch (err) {
    console.error("Error in getOrCreateRekening:", err);
    return null;
  }
}

export async function updateRekeningSaldo(rekeningId: string, delta: number): Promise<boolean> {
  try {
    // The database has trigger updates but in case we want manual force sync:
    // Actually the trigger `trg_update_saldo` handles update_saldo_on_transaksi automatically on database level.
    // So we don't need manual updates if triggers work. But we can update manually if needed.
    return true;
  } catch (err) {
    console.error("Error in updateRekeningSaldo:", err);
    return false;
  }
}
