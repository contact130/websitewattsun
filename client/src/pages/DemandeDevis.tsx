import { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Sun, Thermometer, Battery, PlugZap, Zap, Fan, Check, Clock, AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const IconComponent = ({ iconName, size, className }: { iconName: keyof typeof IconMap, size: number, className: string }) => {
  const Icon = IconMap[iconName];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
};

interface FormData {
  selectedServices: string[];
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  typeToiture: string;
  inclinaisonToiture: string;
  surfaceDisponible: string;
  consommationAnnuelle: string;
  typeChauffageActuel: string;
  surfaceChauffer: string;
  anneeConstruction: string;
  typePompeChaleur: string;
  chauffageCentral: string;
  typeVehicule: string;
  lieuInstallation: string;
  priseRecharge: string;
  capaciteStockage: string;
  installationPhotovoltaique: string;
  marqueOnduleur: string;
  description: string;
}

interface ValidationErrors {
  email?: string;
  telephone?: string;
  nom?: string;
  prenom?: string;
  adresse?: string;
}

const STORAGE_KEY = "wattsun_devis_form";

export default function DemandeDevis() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [isAnimating, setIsAnimating] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormData>(() => {
    // Récupérer les données sauvegardées du localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Erreur lors de la récupération des données:", e);
        }
      }
    }
    return {
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
      typePompeChaleur: "",
      chauffageCentral: "",
      typeVehicule: "",
      lieuInstallation: "",
      priseRecharge: "",
      capaciteStockage: "",
      installationPhotovoltaique: "",
      marqueOnduleur: "",
      description: "",
    };
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && !submitted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, submitted]);

  useEffect(() => {
    document.title = "Demande de Devis Gratuit | Wattsun Énergie";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Demandez votre devis gratuit et personnalisé en quelques clics pour vos projets photovoltaïques, pompes à chaleur, bornes de recharge ou électricité générale."
      );
    }
  }, []);

  // Validation en temps réel
  const validateEmail = (email: string): string | undefined => {
    if (!email) return undefined;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Format d'email invalide";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone) return undefined;
    const cleanPhone = phone.replace(/\s/g, "");
    if (cleanPhone.length < 10) {
      return "Numéro de téléphone incomplet";
    }
    if (!/^[0-9+]+$/.test(cleanPhone)) {
      return "Format de téléphone invalide";
    }
    return undefined;
  };

  // Formatage automatique du téléphone
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 4) return `${numbers.slice(0, 2)} ${numbers.slice(2)}`;
    if (numbers.length <= 6) return `${numbers.slice(0, 2)} ${numbers.slice(2, 4)} ${numbers.slice(4)}`;
    if (numbers.length <= 8) return `${numbers.slice(0, 2)} ${numbers.slice(2, 4)} ${numbers.slice(4, 6)} ${numbers.slice(6)}`;
    return `${numbers.slice(0, 2)} ${numbers.slice(2, 4)} ${numbers.slice(4, 6)} ${numbers.slice(6, 8)} ${numbers.slice(8, 10)}`;
  };

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
    
    // Formatage automatique du téléphone
    if (name === "telephone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedPhone }));
      
      // Validation en temps réel
      const error = validatePhone(formattedPhone);
      setValidationErrors((prev) => ({ ...prev, telephone: error }));
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      
      // Validation en temps réel
      const error = validateEmail(value);
      setValidationErrors((prev) => ({ ...prev, email: error }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouchedFields((prev) => new Set(prev).add(fieldName));
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
      return true; // Étape 2 est optionnelle (détails du projet)
    }
    if (currentStep === 3) {
      const hasRequiredFields = formData.nom.trim() &&
        formData.prenom.trim() &&
        formData.email.trim() &&
        formData.telephone.trim() &&
        formData.adresse.trim();
      const hasNoErrors = !validationErrors.email && !validationErrors.telephone;
      return hasRequiredFields && hasNoErrors;
    }
    return true;
  };

  const goToNextStep = () => {
    if (canProceedToNextStep() && currentStep < 3) {
      setDirection("forward");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setDirection("backward");
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsAnimating(false);
      }, 200);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

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
      message += `Année de construction: ${formData.anneeConstruction}\n`;
      message += `Type de PAC souhaitée: ${formData.typePompeChaleur}\n`;
      message += `Chauffage central existant: ${formData.chauffageCentral}\n\n`;
    }

    if (formData.selectedServices.includes("bornes")) {
      message += `--- Bornes de Recharge ---\n`;
      message += `Type de véhicule: ${formData.typeVehicule}\n`;
      message += `Type de prise: ${formData.priseRecharge}\n`;
      message += `Lieu d'installation: ${formData.lieuInstallation}\n\n`;
    }

    if (formData.selectedServices.includes("batteries")) {
      message += `--- Batteries de Stockage ---\n`;
      message += `Capacité de stockage souhaitée: ${formData.capaciteStockage}\n`;
      message += `Installation photovoltaïque existante: ${formData.installationPhotovoltaique}\n`;
      if (formData.installationPhotovoltaique === "oui") {
        message += `Marque et modèle onduleur: ${formData.marqueOnduleur}\n`;
      }
      message += `\n`;
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
        // Animation de succès
        setShowSuccessAnimation(true);
        
        // Effacer le localStorage
        localStorage.removeItem(STORAGE_KEY);
        
        setTimeout(() => {
          setSubmitted(true);
          setShowSuccessAnimation(false);
        }, 1500);
        
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
          inclinaisonToiture: "",
          typeChauffageActuel: "",
          surfaceChauffer: "",
          anneeConstruction: "",
          typePompeChaleur: "",
          chauffageCentral: "",
          typeVehicule: "",
          lieuInstallation: "",
          priseRecharge: "",
          capaciteStockage: "",
          installationPhotovoltaique: "",
          marqueOnduleur: "",
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

  // Calcul du pourcentage de progression
  const progressPercentage = ((currentStep - 1) / 2) * 100;

  // Animation de succès overlay
  if (showSuccessAnimation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20 mt-20 bg-gray-50">
          <div className="text-center animate-bounce">
            <div className="w-32 h-32 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <CheckCircle2 className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-600">Envoi en cours...</h2>
            <div className="mt-4 flex justify-center gap-1">
              <Sparkles className="w-6 h-6 text-yellow-500 animate-spin" />
              <Sparkles className="w-6 h-6 text-yellow-500 animate-spin delay-100" />
              <Sparkles className="w-6 h-6 text-yellow-500 animate-spin delay-200" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20 mt-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <div className="bg-white border-2 border-green-500 rounded-2xl p-8 shadow-xl transform animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Merci pour votre demande !
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Votre demande de devis a été reçue avec succès. Notre équipe vous recontactera 
                dans les <strong>24 à 48 heures</strong> pour discuter de votre projet.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5 text-[#5e8a92]" />
                  Délai de réponse moyen : <strong>moins de 24h</strong>
                </p>
              </div>
              <Button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(1);
                }}
                className="bg-gradient-to-r from-[#fcad0d] to-[#ffc84d] hover:from-[#5e8a92] hover:to-[#7ca0a8] text-gray-800 hover:text-white font-semibold px-8 py-3 text-lg transition-all duration-300"
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
          {/* En-tête avec temps estimé */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Demander un Devis Gratuit
            </h1>
            <p className="text-gray-600 flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 text-[#5e8a92]" />
              Temps estimé : <strong>2 minutes</strong>
            </p>
          </div>

          {/* Barre de progression animée */}
          <div className="mb-10">
            {/* Barre de progression */}
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#5e8a92] to-[#7ca0a8] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercentage + (currentStep === 3 ? 50 : 0)}%` }}
              />
            </div>
            
            {/* Étapes */}
            <div className="flex justify-between items-center">
              {[
                { num: 1, label: "Services" },
                { num: 2, label: "Détails" },
                { num: 3, label: "Contact" }
              ].map((step, index) => (
                <div key={step.num} className="flex flex-col items-center relative">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 transform ${
                      step.num < currentStep
                        ? "bg-green-500 text-white scale-100"
                        : step.num === currentStep
                        ? "bg-[#5e8a92] text-white scale-110 shadow-lg"
                        : "bg-gray-200 text-gray-500 scale-100"
                    }`}
                  >
                    {step.num < currentStep ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      step.num
                    )}
                  </div>
                  <span className={`mt-2 text-sm font-medium transition-colors ${
                    step.num === currentStep ? "text-[#5e8a92]" : "text-gray-500"
                  }`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire avec animations */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
            <div className={`transition-all duration-300 ease-out ${
              isAnimating 
                ? direction === "forward" 
                  ? "opacity-0 -translate-x-8" 
                  : "opacity-0 translate-x-8"
                : "opacity-100 translate-x-0"
            }`}>
              
              {/* Étape 1: Sélection des Services */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Quels services vous intéressent ?
                  </h2>
                  <p className="text-gray-500 mb-6">Sélectionnez un ou plusieurs services</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SERVICES.map((service: any) => {
                      const isSelected = formData.selectedServices.includes(service.id);
                      return (
                        <div
                          key={service.id}
                          onClick={() => handleServiceToggle(service.id)}
                          className={`p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center transform hover:scale-105 h-[250px] relative ${
                            isSelected
                              ? "border-[#5e8a92] bg-gradient-to-br from-[#5e8a92]/10 to-[#5e8a92]/5 shadow-lg"
                              : "border-gray-200 hover:border-[#5e8a92]/50 bg-white hover:shadow-md"
                          }`}
                        >
                          <div className={`p-3 rounded-full mb-3 transition-all duration-300 ${
                            isSelected ? "bg-[#5e8a92]/20" : "bg-gray-100"
                          }`}>
                            <IconComponent 
                              iconName={service.Icon}
                              size={32} 
                              className={`transition-colors duration-300 ${isSelected ? "text-[#5e8a92]" : "text-gray-400"}`} 
                            />
                          </div>
                          <h3 className={`font-semibold text-lg transition-colors ${
                            isSelected ? "text-[#5e8a92]" : "text-gray-800"
                          }`}>{service.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                          
                          {/* Indicateur de sélection */}
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-[#5e8a92] rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Étape 2: Détails du Projet */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Détails de Votre Projet
                  </h2>
                  <p className="text-gray-500 mb-6">Ces informations nous aident à préparer votre devis (optionnel)</p>

                  {/* Panneaux Photovoltaïques */}
                  {formData.selectedServices.includes("photovoltaique") && (
                    <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                      <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <Sun className="w-5 h-5 text-yellow-500" />
                        Panneaux Photovoltaïques
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="typeToiture">Type de Toiture</Label>
                          <Select
                            value={formData.typeToiture}
                            onValueChange={(value) => handleSelectChange("typeToiture", value)}
                          >
                            <SelectTrigger className="mt-1">
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
                          <Label htmlFor="surfaceDisponible">Surface Disponible (m²)</Label>
                          <Input
                            id="surfaceDisponible"
                            name="surfaceDisponible"
                            type="number"
                            value={formData.surfaceDisponible}
                            onChange={handleInputChange}
                            placeholder="30"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="inclinaisonToiture">Inclinaison (degrés)</Label>
                          <Input
                            id="inclinaisonToiture"
                            name="inclinaisonToiture"
                            type="number"
                            value={formData.inclinaisonToiture}
                            onChange={handleInputChange}
                            placeholder="30"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="consommationAnnuelle">Consommation Annuelle (kWh)</Label>
                          <Input
                            id="consommationAnnuelle"
                            name="consommationAnnuelle"
                            type="number"
                            value={formData.consommationAnnuelle}
                            onChange={handleInputChange}
                            placeholder="3500"
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pompes à Chaleur */}
                  {formData.selectedServices.includes("pompes-chaleur") && (
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                      <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <Thermometer className="w-5 h-5 text-blue-500" />
                        Pompes à Chaleur
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="typeChauffageActuel">Chauffage Actuel</Label>
                          <Select
                            value={formData.typeChauffageActuel}
                            onValueChange={(value) => handleSelectChange("typeChauffageActuel", value)}
                          >
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Sélectionnez un type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="gaz">Gaz</SelectItem>
                              <SelectItem value="fioul">Fioul</SelectItem>
                              <SelectItem value="electrique">Électrique</SelectItem>
                              <SelectItem value="bois">Bois</SelectItem>
                              <SelectItem value="pompe_a_chaleur">PAC (Remplacement)</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="surfaceChauffer">Surface à Chauffer (m²)</Label>
                          <Input
                            id="surfaceChauffer"
                            name="surfaceChauffer"
                            type="number"
                            value={formData.surfaceChauffer}
                            onChange={handleInputChange}
                            placeholder="150"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="anneeConstruction">Année de Construction</Label>
                          <Input
                            id="anneeConstruction"
                            name="anneeConstruction"
                            type="number"
                            value={formData.anneeConstruction}
                            onChange={handleInputChange}
                            placeholder="2005"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Type de PAC souhaitée</Label>
                          <RadioGroup
                            value={formData.typePompeChaleur}
                            onValueChange={(value) => handleRadioChange("typePompeChaleur", value)}
                            className="mt-2 flex flex-wrap gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="air_eau" id="pac-air-eau" />
                              <Label htmlFor="pac-air-eau" className="cursor-pointer">Air/Eau</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="air_air" id="pac-air-air" />
                              <Label htmlFor="pac-air-air" className="cursor-pointer">Air/Air</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="geothermique" id="pac-geo" />
                              <Label htmlFor="pac-geo" className="cursor-pointer">Géothermique</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bornes de Recharge */}
                  {formData.selectedServices.includes("bornes") && (
                    <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <PlugZap className="w-5 h-5 text-purple-500" />
                        Bornes de Recharge
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="typeVehicule">Type de Véhicule</Label>
                          <Input
                            id="typeVehicule"
                            name="typeVehicule"
                            value={formData.typeVehicule}
                            onChange={handleInputChange}
                            placeholder="Tesla Model 3"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lieuInstallation">Lieu d'Installation</Label>
                          <Select
                            value={formData.lieuInstallation}
                            onValueChange={(value) => handleSelectChange("lieuInstallation", value)}
                          >
                            <SelectTrigger className="mt-1">
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
                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <Battery className="w-5 h-5 text-green-500" />
                        Batteries de Stockage
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="capaciteStockage">Capacité Souhaitée (kWh)</Label>
                          <Input
                            id="capaciteStockage"
                            name="capaciteStockage"
                            type="number"
                            value={formData.capaciteStockage}
                            onChange={handleInputChange}
                            placeholder="10"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label>Installation PV existante ?</Label>
                          <RadioGroup
                            value={formData.installationPhotovoltaique}
                            onValueChange={(value) => handleRadioChange("installationPhotovoltaique", value)}
                            className="mt-2 flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="oui" id="pv-oui" />
                              <Label htmlFor="pv-oui" className="cursor-pointer">Oui</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="non" id="pv-non" />
                              <Label htmlFor="pv-non" className="cursor-pointer">Non</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        {formData.installationPhotovoltaique === "oui" && (
                          <div className="md:col-span-2">
                            <Label htmlFor="marqueOnduleur">Marque et modèle de votre onduleur</Label>
                            <Input
                              id="marqueOnduleur"
                              name="marqueOnduleur"
                              value={formData.marqueOnduleur}
                              onChange={handleInputChange}
                              placeholder="Ex: SolarEdge SE6000"
                              className="mt-1"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Électricité Générale ou VMC */}
                  {(formData.selectedServices.includes("electricite") || formData.selectedServices.includes("vmc")) && (
                    <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
                      <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        {formData.selectedServices.includes("electricite") ? (
                          <><Zap className="w-5 h-5 text-red-500" /> Électricité Générale</>
                        ) : (
                          <><Fan className="w-5 h-5 text-teal-500" /> VMC</>
                        )}
                      </h3>
                      <div>
                        <Label htmlFor="description">Décrivez votre projet</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Décrivez votre projet, vos besoins spécifiques..."
                          className="mt-1 min-h-32"
                        />
                      </div>
                    </div>
                  )}

                  {formData.selectedServices.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                      <p>Veuillez d'abord sélectionner un service à l'étape précédente</p>
                    </div>
                  )}
                </div>
              )}

              {/* Étape 3: Informations de Contact */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Vos Informations de Contact
                  </h2>
                  <p className="text-gray-500 mb-6">Dernière étape ! Nous vous recontacterons rapidement.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("prenom")}
                        placeholder="Jean"
                        required
                        className={`mt-1 transition-all ${
                          formData.prenom && "border-green-500 focus:ring-green-500"
                        }`}
                      />
                      {formData.prenom && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-9" />
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("nom")}
                        placeholder="Dupont"
                        required
                        className={`mt-1 transition-all ${
                          formData.nom && "border-green-500 focus:ring-green-500"
                        }`}
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("email")}
                      placeholder="jean@example.com"
                      required
                      className={`mt-1 transition-all ${
                        validationErrors.email && touchedFields.has("email")
                          ? "border-red-500 focus:ring-red-500"
                          : formData.email && !validationErrors.email
                          ? "border-green-500 focus:ring-green-500"
                          : ""
                      }`}
                    />
                    {validationErrors.email && touchedFields.has("email") && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {validationErrors.email}
                      </p>
                    )}
                    {formData.email && !validationErrors.email && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-9" />
                    )}
                  </div>
                  
                  <div className="relative">
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("telephone")}
                      placeholder="06 12 34 56 78"
                      required
                      className={`mt-1 transition-all ${
                        validationErrors.telephone && touchedFields.has("telephone")
                          ? "border-red-500 focus:ring-red-500"
                          : formData.telephone && !validationErrors.telephone && formData.telephone.replace(/\s/g, "").length >= 10
                          ? "border-green-500 focus:ring-green-500"
                          : ""
                      }`}
                    />
                    {validationErrors.telephone && touchedFields.has("telephone") && (
                      <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {validationErrors.telephone}
                      </p>
                    )}
                    {formData.telephone && !validationErrors.telephone && formData.telephone.replace(/\s/g, "").length >= 10 && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 absolute right-3 top-9" />
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="adresse">Adresse Complète *</Label>
                    <Input
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur("adresse")}
                      placeholder="123 rue de la Paix, 17000 La Rochelle"
                      required
                      className={`mt-1 transition-all ${
                        formData.adresse && "border-green-500 focus:ring-green-500"
                      }`}
                    />
                  </div>

                  {/* Récapitulatif des services sélectionnés */}
                  <div className="bg-gray-50 rounded-xl p-4 mt-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Services sélectionnés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {formData.selectedServices.map((serviceId) => {
                        const service = SERVICES.find((s: any) => s.id === serviceId);
                        return service ? (
                          <span key={serviceId} className="bg-[#5e8a92]/10 text-[#5e8a92] px-3 py-1 rounded-full text-sm font-medium">
                            {service.title}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Boutons de Navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={goToPreviousStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2 px-6 py-3 transition-all hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5" />
                Précédent
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={goToNextStep}
                  disabled={!canProceedToNextStep()}
                  className="bg-gradient-to-r from-[#5e8a92] to-[#7ca0a8] hover:from-[#4a7279] hover:to-[#5e8a92] text-white flex items-center gap-2 px-6 py-3 transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  Suivant
                  <ChevronRight className="w-5 h-5" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isLoading || !canProceedToNextStep()}
                  className="bg-gradient-to-r from-[#fcad0d] to-[#ffc84d] hover:from-[#5e8a92] hover:to-[#7ca0a8] text-gray-800 hover:text-white font-semibold px-8 py-3 transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Envoyer ma Demande
                      <Sparkles className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              )}
            </div>
          </form>

          {/* Indicateur de sauvegarde automatique */}
          <p className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Vos réponses sont sauvegardées automatiquement
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
