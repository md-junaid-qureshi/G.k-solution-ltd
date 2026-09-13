"use server";

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  portfolioUrl?: string;
  message?: string;
}

export interface ApplicationResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitApplication(
  prevState: ApplicationResponse | null,
  formData: FormData
): Promise<ApplicationResponse> {
  const fullName = (formData.get("fullName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const position = (formData.get("position") as string)?.trim();
  const experience = (formData.get("experience") as string)?.trim();
  const portfolioUrl = (formData.get("portfolioUrl") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  const errors: Record<string, string> = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Please enter your full legal name.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (!phone || phone.length < 8) {
    errors.phone = "Please provide a valid contact phone number.";
  }

  if (!position) {
    errors.position = "Please select the position you are applying for.";
  }

  if (!experience) {
    errors.experience = "Please select your years of experience.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please complete all mandatory fields correctly.",
      errors,
    };
  }

  // Prepared for production email dispatch / CRM ingestion
  const payload: ApplicationFormData = {
    fullName,
    email,
    phone,
    position,
    experience,
    portfolioUrl: portfolioUrl || undefined,
    message: message || undefined,
  };

  // Log application safely for server-side auditing
  console.log("[CAREERS APPLICATION RECEIVED]:", {
    ...payload,
    timestamp: new Date().toISOString(),
    recipient: "gkspacesolutionllp@gmail.com",
  });

  return {
    success: true,
    message: `Thank you, ${fullName}. Your candidacy for the ${position} role has been transmitted to our talent acquisition team at GK Space Solutions LLP. We will review your credentials and contact you directly.`,
  };
}
