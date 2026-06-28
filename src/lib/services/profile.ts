import { supabase } from "../supabase";
import { Profile } from "../types";

export async function getProfile(userId: string): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        // Record not found, insert one
        const userEmail = (await supabase.auth.getUser()).data.user?.email || null;
        const { data: newProfile, error: insertError } = await supabase
          .from("profiles")
          .insert({ id: userId, email: userEmail, nama: "Muja Karamoy" })
          .select()
          .single();
        if (insertError) throw insertError;
        return newProfile as Profile;
      }
      throw error;
    }

    return data as Profile;
  } catch (err) {
    console.error("Error in getProfile:", err);
    return null;
  }
}

export async function updateProfile(userId: string, updates: Partial<Omit<Profile, "id">>): Promise<Profile | null> {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .update(updates)
      .eq("id", userId)
      .select()
      .single();

    if (error) throw error;
    return data as Profile;
  } catch (err) {
    console.error("Error in updateProfile:", err);
    return null;
  }
}

export async function uploadProfilePhoto(userId: string, base64Image: string): Promise<string | null> {
  try {
    // If the user wants to upload a file directly to supabase storage
    // But since the current mockup saves image as local data url/base64,
    // we can just store the base64 string or data URL directly inside profiles.foto_url text column.
    // This is much easier and doesn't require configuring Supabase bucket permissions!
    // Let's just update the profile with the base64/dataURL as foto_url.
    const updated = await updateProfile(userId, { foto_url: base64Image });
    return updated ? updated.foto_url : null;
  } catch (err) {
    console.error("Error in uploadProfilePhoto:", err);
    return null;
  }
}
