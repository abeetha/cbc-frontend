import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3Zmpnd3Fqbnl3eWZ6ZWxobmRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MTc1MjEsImV4cCI6MjA2NjQ5MzUyMX0.8qcKaDB0a5PXwuFEdsl5xVLD9JK6FkDOxXJtzd4uz50`

const url = "https://awfjgwqjnywyfzelhndd.supabase.co"

export default function uploadMediaToSupabase(file) {
    return new Promise((resolve, reject) => {
        if (file == null) {
            alert("Please select a file")
        }
        let fileName = file.name
        const extension = fileName.split(".")[fileName.split(".").length - 1]
        const supabase = createClient(url, key);
        const timestamp = new Date().getTime();
        fileName = timestamp +file.name+ "." + extension;
        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false
        }).then(() => {
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl)
        }).catch((err) => {
            reject(err);
        });
    });
}
