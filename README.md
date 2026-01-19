# ClothingOnline

ClothingOnline est une application mobile native de gestion de vêtements en ligne.

Elle permet de lister, créer, modifier et supprimer une collection de vêtements.


# Spécifications techniques

J'ai utilisé react native navigation et screen pour gérer la navigation entre les différents écrans (ici la liste des vêtements, la page de détails des vêtements et le formulaire).
J'ai aussi utilisé asyncStorage pour stocker localement les données déjà chargées et éviter de re-render les pages lorsque les données des requêtes sont les mêmes que celle déjà enregistrées localement.