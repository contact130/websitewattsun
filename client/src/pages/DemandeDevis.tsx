import { useState } from "react";
import { ChevronRight, ChevronLeft, Sun, Thermometer, Battery, PlugZap, Zap, Fan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES, CONTACT } from "../../../shared/const";

const IconMap = {
  Sun: Sun,
  Thermometer: Thermometer,
  Battery: Battery,
  ChargingStation: PlugZap,
  Zap: Zap,
  Fan: Fan,
};

// Composant pour rendre l'icône à partir de son nom (string)
const IconComponent = ({ iconName, size, className }: { iconName: keyof typeof IconMap, size: number, className: string }) => {
  const Icon = IconMap[iconName];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};


interface FormData {
  // Étape 1: Services
  selectedServices: string[];
  
  // Étape 2: Contact
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  
  // Étape 3: Questions spécifiques
  // Panneaux
  typeToiture: string;
  inclinaisonToiture: string;
  surfaceDisponible: string;
  consommationAnnuelle: string;
  
  // Pompes
  typeChauffageActuel: string;
  surfaceChauffer: string;
  anneeConstruction: string;
  
  // Bornes
  typeVehicule: string;
  lieuInstallation: string;
  
  // Batteries
  capaciteStockage: string;
  installationPhotovoltaique: string;
  
  // Électricité/VMC
  description: string;
}

export default function DemandeDevis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    selectedServices: [],
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    adresse: "",
    typeToiture: "",
    surfaceDisponible: "",
    inclinaisonToiture: "",
    consommationAnnuelle: "",
    typeChauffageActuel: "",
    surfaceChauffer: "",
    anneeConstruction: "",
    typeVehicule: "",
    lieuInstallation: "",
    capaciteStockage: "",
    installationPhotovoltaique: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId],
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canProceedToNextStep = () => {
    if (currentStep === 1) {
      return formData.selectedServices.length > 0;
    }
    if (currentStep === 2) {
      return (
        formData.nom.trim() &&
        formData.prenom.trim() &&
        formData.email.trim() &&
        formData.telephone.trim() &&
        formData.adresse.trim()
      );
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Construire le message pour Formspree
    const servicesText = formData.selectedServices
      .map((id) => {
        const service = SERVICES.find((s: any) => s.id === id);
        return service ? service.title : id;
      })
      .join(", ");

    let message = `Services demandés: ${servicesText}\n\n`;
    message += `--- Informations de Contact ---\n`;
    message += `Nom: ${formData.nom}\n`;
    message += `Prénom: ${formData.prenom}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Téléphone: ${formData.telephone}\n`;
    message += `Adresse: ${formData.adresse}\n\n`;

    if (formData.selectedServices.includes("photovoltaique")) {
      message += `--- Panneaux Photovoltaïques ---\n`;
      message += `Type de toiture: ${formData.typeToiture}\n`;
      message += `Inclinaison de la toiture: ${formData.inclinaisonToiture} degrés\n`;
      message += `Surface disponible: ${formData.surfaceDisponible} m²\n`;
      message += `Consommation annuelle: ${formData.consommationAnnuelle} kWh\n\n`;
    }

    if (formData.selectedServices.includes("pompes-chaleur")) {
      message += `--- Pompes à Chaleur ---\n`;
      message += `Type de chauffage actuel: ${formData.typeChauffageActuel}\n`;
      message += `Surface à chauffer: ${formData.surfaceChauffer} m²\n`;
      message += `Année de construction: ${formData.anneeConstruction}\n\n`;
    }

    if (formData.selectedServices.includes("bornes")) {
      message += `--- Bornes de Recharge ---\n`;
      message += `Type de véhicule: ${formData.typeVehicule}\n`;
      message += `Lieu d'installation: ${formData.lieuInstallation}\n\n`;
    }

    if (formData.selectedServices.includes("batteries")) {
      message += `--- Batteries de Stockage ---\n`;
      message += `Capacité de stockage souhaitée: ${formData.capaciteStockage}\n`;
      message += `Installation photovoltaïque existante: ${formData.installationPhotovoltaique}\n\n`;
    }

    if (
      formData.selectedServices.includes("electricite") ||
      formData.selectedServices.includes("vmc")
    ) {
      message += `--- Détails supplémentaires ---\n`;
      message += `${formData.description}\n`;
    }

    try {
      const response = await fetch(CONTACT.formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          email: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          selectedServices: [],
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          adresse: "",
          typeToiture: "",
          surfaceDisponible: "",
          consommationAnnuelle: "",
          typeChauffageActuel: "",
          surfaceChauffer: "",
          anneeConstruction: "",
          typeVehicule: "",
          lieuInstallation: "",
          capaciteStockage: "",
          installationPhotovoltaique: "",
          description: "",
        });
        setCurrentStep(1);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20 mt-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-green-900 mb-4">
                Merci pour votre demande !
              </h2>
              <p className="text-green-800 mb-6">
                Votre demande de devis a été reçue avec succès. Notre équipe vous recontactera 
                dans les plus brefs délais pour discuter de votre projet.
              </p>
              <p className="text-green-700 mb-6">
                Vous recevrez également un email de confirmation à l'adresse : <strong>{formData.email}</strong>
              </p>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="bg-[#5e8a92] hover:bg-[#4a7279] text-white"
              >
                Soumettre une autre demande
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 py-20 mt-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Demander un Devis Gratuit
          </h1>

          {/* Indicateur de progression */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step <= currentStep
                        ? "bg-[#5e8a92] text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        step < currentStep
                          ? "bg-[#5e8a92]"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Services</span>
              <span>Informations</span>
              <span>Détails</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            {/* Étape 1: Sélection des Services */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Quels services vous intéressent ?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {SERVICES.map((service: any) => {
                    const isSelected = formData.selectedServices.includes(service.id);
                    return (
                      <div
                        key={service.id}
                        onClick={() => handleServiceToggle(service.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 flex flex-col items-center text-center ${
                          isSelected
                            ? "border-[#5e8a92] bg-[#5e8a92]/10 shadow-md"
                            : "border-gray-200 hover:border-gray-400 bg-white"
                        }`}
                      >
                        <IconComponent 
                          iconName={service.Icon}
                          size={36} 
                          className={`mb-2 transition-colors ${isSelected ? "text-[#5e8a92]" : "text-gray-500"}`} 
                        />
                        <h3 className="font-semibold text-lg text-gray-800">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Étape 2: Informations de Contact */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Vos Informations de Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Jean"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Dupont"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jean@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telephone">Téléphone *</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="adresse">Adresse Complète *</Label>
                  <Input
                    id="adresse"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleInputChange}
                    placeholder="123 rue de la Paix, 17000 La Rochelle"
                    required
                  />
                </div>
              </div>
            )}

            {/* Étape 3: Questions Spécifiques */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Détails de Votre Projet
                </h2>

                {/* Panneaux Photovoltaïques */}
                {formData.selectedServices.includes("photovoltaique") && (
                  <div className="pl-6 py-4 border-l-4 border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Panneaux Photovoltaïques
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="typeToiture">Type de Toiture</Label>
                        <Select
                          value={formData.typeToiture}
                          onValueChange={(value) =>
                            handleSelectChange("typeToiture", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tuiles">Tuiles</SelectItem>
                            <SelectItem value="ardoises">Ardoises</SelectItem>
                            <SelectItem value="tole">Tôle</SelectItem>
                            <SelectItem value="beton">Béton</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="surfaceDisponible">
                          Surface Disponible Estimée (m²)
                        </Label>
                        <Input
                          id="surfaceDisponible"
                          name="surfaceDisponible"
                          type="number"
                          value={formData.surfaceDisponible}
                          onChange={handleInputChange}
                                                        placeholder="30"
                                                />
                                              </div>
                                              <div>
                                                <Label htmlFor="inclinaisonToiture">
                                                  Inclinaison de la Toiture (en degrés)
                                                </Label>
                                                <Input
                                                  id="inclinaisonToiture"
                                                  name="inclinaisonToiture"
                                                  type="number"
                                                  value={formData.inclinaisonToiture}
                                                  onChange={handleInputChange}
                                                  placeholder="30"
                                                />
                                              </div>
                                              <div>
                        <Label htmlFor="consommationAnnuelle">
                          Consommation Annuelle d'Électricité (kWh)
                        </Label>
                        <Input
                          id="consommationAnnuelle"
                          name="consommationAnnuelle"
                          type="number"
                          value={formData.consommationAnnuelle}
                          onChange={handleInputChange}
                          placeholder="3500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Pompes à Chaleur */}
                {formData.selectedServices.includes("pompes-chaleur") && (
                  <div className="pl-6 py-4 border-l-4 border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Pompes à Chaleur
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="typeChauffageActuel">
                          Type de Chauffage Actuel
                        </Label>
                        <Select
                          value={formData.typeChauffageActuel}
                          onValueChange={(value) =>
                            handleSelectChange("typeChauffageActuel", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gaz">Gaz</SelectItem>
                            <SelectItem value="fioul">Fioul</SelectItem>
                            <SelectItem value="electrique">Électrique</SelectItem>
                            <SelectItem value="bois">Bois</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="surfaceChauffer">
                          Surface à Chauffer (m²)
                        </Label>
                        <Input
                          id="surfaceChauffer"
                          name="surfaceChauffer"
                          type="number"
                          value={formData.surfaceChauffer}
                          onChange={handleInputChange}
                          placeholder="150"
                        />
                      </div>
                      <div>
                        <Label htmlFor="anneeConstruction">
                          Année de Construction
                        </Label>
                        <Input
                          id="anneeConstruction"
                          name="anneeConstruction"
                          type="number"
                          value={formData.anneeConstruction}
                          onChange={handleInputChange}
                          placeholder="2005"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Bornes de Recharge */}
                {formData.selectedServices.includes("bornes") && (
                  <div className="pl-6 py-4 border-l-4 border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Bornes de Recharge
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="typeVehicule">Type de Véhicule</Label>
                        <Input
                          id="typeVehicule"
                          name="typeVehicule"
                          value={formData.typeVehicule}
                          onChange={handleInputChange}
                          placeholder="Tesla Model 3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lieuInstallation">
                          Lieu d'Installation Souhaité
                        </Label>
                        <Select
                          value={formData.lieuInstallation}
                          onValueChange={(value) =>
                            handleSelectChange("lieuInstallation", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un lieu" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="garage">Garage</SelectItem>
                            <SelectItem value="exterieur">Extérieur</SelectItem>
                            <SelectItem value="carport">Carport</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Batteries de Stockage */}
                {formData.selectedServices.includes("batteries") && (
                  <div className="pl-6 py-4 border-l-4 border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Batteries de Stockage
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="capaciteStockage">
                          Capacité de Stockage Souhaitée (kWh)
                        </Label>
                        <Input
                          id="capaciteStockage"
                          name="capaciteStockage"
                          type="number"
                          value={formData.capaciteStockage}
                          onChange={handleInputChange}
                          placeholder="10"
                        />
                      </div>
                      <div>
                        <Label>
                          Avez-vous une installation photovoltaïque existante ?
                        </Label>
                        <RadioGroup
                          value={formData.installationPhotovoltaique}
                          onValueChange={(value) =>
                            handleRadioChange("installationPhotovoltaique", value)
                          }
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="oui" id="pv-oui" />
                            <Label htmlFor="pv-oui" className="cursor-pointer">
                              Oui
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="non" id="pv-non" />
                            <Label htmlFor="pv-non" className="cursor-pointer">
                              Non
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                )}

                {/* Électricité Générale ou VMC */}
                {(formData.selectedServices.includes("electricite") ||
                  formData.selectedServices.includes("vmc")) && (
                  <div className="pl-6 py-4 border-l-4 border-gray-200">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">
                      Détails de Votre Projet
                    </h3>
                    <div>
                      <Label htmlFor="description">
                        Décrivez votre besoin en détail
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre projet, vos besoins spécifiques..."
                        className="min-h-32"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Boutons de Navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canProceedToNextStep()}
                  className="bg-[#5e8a92] hover:bg-[#4a7279] text-white flex items-center gap-2"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#5e8a92] hover:bg-[#4a7279] text-white"
                >
                  {isLoading ? "Envoi en cours..." : "Envoyer ma Demande"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

