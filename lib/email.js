// lib/email.js
export async function submitLead(formData) {
    // Ganti YOUR_FORM_ID dengan ID dari layanan Formspree atau layanan serupa
    const response = await fetch("https://formspree.io/f/moveqbnk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  
    if (!response.ok) {
      throw new Error("Failed to submit form");
    }
  
    return await response.json();
  }
  