import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient('https://ingazqnwzecqgtknrpig.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluZ2F6cW53emVjcWd0a25ycGlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTMyNzYsImV4cCI6MTk5ODg2OTI3Nn0.U7vLQ5_qRherG047YsETuo5kVACMDzsgYXu3HuwXom0');

export async function getPortfolioData() {
  try {
    console.log("Tentative de récupération des données du portfolio...");
    const { data, error } = await supabase
      .from('newportfolio')
      .select('cv')
      .eq('id', 1);

    console.log("Données du portfolio pour la mise à jour du CV:", data);

    if (error) {
      console.log("Erreur lors de la récupération des données du portfolio:", error);
    }

    return data;
  } catch (error) {
    console.log("Erreur inattendue lors de la récupération des données du portfolio:", error);
    return [];
  }
}


export async function updatePortfolioViews() {
  const { data, error } = await supabase
    .from('newportfolio')
    .select('vue')
    .eq('id', 1);

  if (!error && data.length > 0) {
    const currentViews = data[0].vue;
    const newViews = currentViews !== null ? currentViews + 1 : 1;

    const { data: updateData, error: updateError } = await supabase
      .from('newportfolio')
      .update({ vue: newViews })
      .eq('id', 1);

    if (updateError) {
      console.log("Erreur lors de la mise à jour du compteur de vues:", updateError);
    } else {
      console.log('Le compteur de vues a été mis à jour avec succès !');
    }
  } else {
    console.log("Erreur lors de la récupération des données du portfolio:", error);
  }
}

export async function updateCVClicks() {
  const { data, error } = await supabase
    .from('newportfolio')
    .select('cv')
    .eq('id', 1);

  console.log("Données du portfolio pour la mise à jour du CV:", data);

  if (!error && data.length > 0) {
    const newCount = data[0].cv + 1;
    const { data: newData, error: updateError } = await supabase
      .from('newportfolio')
      .update({ cv: newCount })
      .eq('id', 1);

    if (updateError) {
      console.log("Erreur lors de la mise à jour du compteur de CV:", updateError);
    } else {
      console.log('Le compteur de cv a été mis à jour avec succès !');
    }
  } else {
    console.log("Erreur lors de la récupération des données du portfolio:", error);
  }
}
