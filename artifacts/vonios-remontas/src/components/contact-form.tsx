import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().optional(),
  phone: z.string().min(1, "Įveskite telefono numerį"),
  city: z.string().optional(),
  description: z.string().min(10, "Trumpai aprašykite reikalingus darbus"),
  deadline: z.string().optional(),
  website: z.string().max(0, "Invalid").optional(), // Honeypot
  photos: z.any().optional(),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      description: "",
      deadline: "",
      website: "", // MUST be empty
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.website) return; // Honeypot caught a bot

    setIsSubmitting(true);
    setIsError(false);

    try {
      const formData = new FormData();
      if (values.name) formData.append("name", values.name);
      formData.append("phone", values.phone);
      if (values.city) formData.append("city", values.city);
      formData.append("description", values.description);
      if (values.deadline) formData.append("deadline", values.deadline);
      
      const fileInput = document.getElementById("photos") as HTMLInputElement;
      if (fileInput && fileInput.files) {
        for (let i = 0; i < Math.min(fileInput.files.length, 5); i++) {
          formData.append("photos", fileInput.files[i]);
        }
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData, // Browser sets multipart/form-data with boundary
      });

      if (res.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch (e) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-primary/10 border border-primary/20 p-8 text-center space-y-4">
        <h3 className="text-2xl font-serif text-primary">Ačiū už užklausą</h3>
        <p className="text-muted-foreground">Susisieksime su jumis artimiausiu metu.</p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>Siųsti naują užklausą</Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        
        {/* HONEYPOT */}
        <div className="hidden">
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormControl><Input {...field} tabIndex={-1} autoComplete="off" /></FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vardas</FormLabel>
                <FormControl>
                  <Input placeholder="Jūsų vardas" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefonas *</FormLabel>
                <FormControl>
                  <Input placeholder="+370 600 00000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Miestas / Rajonas</FormLabel>
                <FormControl>
                  <Input placeholder="Klaipėda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Planuojama darbų pradžia</FormLabel>
                <FormControl>
                  <Input placeholder="Pvz. Už mėnesio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trumpas darbų aprašymas *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Ką reikia padaryti? Koks plotas?" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>Nuotraukos (iki 5 failų)</FormLabel>
          <FormControl>
            <Input 
              type="file" 
              id="photos"
              accept="image/jpeg,image/png,image/webp" 
              multiple 
              className="py-3 cursor-pointer file:cursor-pointer"
            />
          </FormControl>
          <p className="text-xs text-muted-foreground mt-1">Pridėkite esamos būklės nuotraukų, kad galėtume tiksliau įvertinti sąmatą.</p>
        </FormItem>

        {isError && (
          <p className="text-destructive text-sm">Įvyko klaida siunčiant formą. Prašome pabandyti dar kartą arba paskambinti telefonu.</p>
        )}

        <Button type="submit" size="lg" className="w-full md:w-auto mt-4" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Siunčiama...
            </>
          ) : (
            "Gauti pasiūlymą"
          )}
        </Button>
      </form>
    </Form>
  );
}
