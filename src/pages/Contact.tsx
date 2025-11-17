import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser'; // Import EmailJS

// --- Configuration ---
const EMAILJS_SERVICE_ID = 'service_9svhngl'; // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_kitagrs'; // !! IMPORTANT: REPLACE with your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'pKRgdvgelh1NBB4us'; // !! IMPORTANT: REPLACE with your EmailJS Public Key/User ID
const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/Jzhy88PU8WE2bDYe9';
// NOTE: I've used a standard Google Maps search URL, as the provided URL was malformed.

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Function to handle the form submission and send the email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // The template parameters should match the variables you set up in your EmailJS template.
    // Ensure you have a template with parameters like 'user_name', 'user_email', 'user_phone', 'subject', and 'message'.
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      // Send the email using emailjs.send
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID, // Use your actual template ID
        templateParams,
        EMAILJS_PUBLIC_KEY // Use your actual Public Key
      );

      // Success feedback
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Clear the form
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Error feedback
      toast.error("Failed to send message. Please try again.");
    }
  };

  // Function to handle opening Google Maps
  const handleOpenMaps = () => {
    window.open(GOOGLE_MAPS_LINK, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Birtamode-5", "Near Old Bhadrapur Road"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["023 543073", "023 533073"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["jhapaliberty@gmail.com", "puranprasadbista@gmail.com"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 4:00 PM", "Sat: 9:00 AM - 12:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, idx) => (
              <Card key={idx} className="hover-lift">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold">{info.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    {info.details.map((detail, detailIdx) => (
                      <p key={detailIdx}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="youremail@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 9XXXXXXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Inquiry about admissions"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="hover-lift">
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-[500px] bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Find Us Here</h3>
                    <p className="text-muted-foreground">
                      Birtamode-5<br />
                      Jhapa
                    </p>
                    
                    {/* Add onClick handler to the button */}
                    <Button variant="outline" className="mt-6" onClick={handleOpenMaps}>
                      Open in Maps
                    </Button>
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;