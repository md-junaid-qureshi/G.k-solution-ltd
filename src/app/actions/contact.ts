"use server";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  project?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
}

export async function submitContactInquiry(
  prevState: ContactResponse | null,
  formData: FormData
): Promise<ContactResponse> {
  const fullName = (formData.get("fullName") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const project = (formData.get("project") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  const errors: Record<string, string> = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (!phone || phone.length < 8) {
    errors.phone = "Please provide a valid phone number.";
  }

  if (!message || message.length < 5) {
    errors.message = "Please share details about your inquiry or space requirements.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  console.log("[INQUIRY RECEIVED]:", {
    fullName,
    email,
    phone,
    project: project || "General Turnkey Inquiry",
    message,
    timestamp: new Date().toISOString(),
    recipient: "gkspacesolutionllp@gmail.com",
  });

  return {
    success: true,
    message: `Thank you, ${fullName}. Your inquiry${project ? ` regarding "${project}"` : ""} has been received. Our principal engineering team will contact you within 24 business hours.`,
  };
}
