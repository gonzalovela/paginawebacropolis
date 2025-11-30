import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Mail, Phone, MapPin, Calendar, MessageSquare, Download } from "lucide-react";

type Inscripcion = {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  interes: string;
  mensaje: string;
  created_at: string;
  sede_id: string | null;
  sedes?: {
    nombre: string;
    ciudad: string;
  } | null;
};

export const InscripcionesAdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInscripcion, setSelectedInscripcion] = useState<Inscripcion | null>(null);

  const { data: inscripciones, isLoading } = useQuery({
    queryKey: ["inscripciones-admin"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("inscripciones")
        .select(`
          *,
          sedes (
            nombre,
            ciudad
          )
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Inscripcion[];
    },
  });

  const filteredInscripciones = inscripciones?.filter(
    (i) =>
      i.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      i.interes.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (i.sedes?.nombre || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInteresLabel = (interes: string) => {
    const labels: Record<string, string> = {
      filosofia: "Filosofía",
      cultura: "Cultura",
      voluntariado: "Voluntariado",
      otros: "Otros",
    };
    return labels[interes] || interes;
  };

  const getInteresBadgeVariant = (interes: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      filosofia: "default",
      cultura: "secondary",
      voluntariado: "outline",
    };
    return variants[interes] || "outline";
  };

  const exportToCSV = () => {
    if (!filteredInscripciones?.length) return;

    const headers = ["Nombre", "Email", "Teléfono", "Interés", "Sede", "Mensaje", "Fecha"];
    const rows = filteredInscripciones.map((i) => [
      i.nombre,
      i.email,
      i.telefono,
      getInteresLabel(i.interes),
      i.sedes?.nombre || "Sin sede",
      i.mensaje.replace(/"/g, '""'),
      new Date(i.created_at).toLocaleDateString("es-PE"),
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.map((c) => `"${c}"`).join(","))].join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", `inscripciones_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Cargando inscripciones...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Inscripciones</h2>
          <p className="text-sm text-muted-foreground">
            {inscripciones?.length || 0} registros en total
          </p>
        </div>
        <Button onClick={exportToCSV} variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Exportar CSV
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por nombre, email, interés o sede..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {!filteredInscripciones?.length ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">
            {searchTerm ? "No se encontraron resultados" : "No hay inscripciones registradas"}
          </p>
        </Card>
      ) : (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Contacto</TableHead>
                  <TableHead>Interés</TableHead>
                  <TableHead>Sede</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInscripciones.map((inscripcion) => (
                  <TableRow key={inscripcion.id}>
                    <TableCell className="font-medium">{inscripcion.nombre}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {inscripcion.email}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {inscripcion.telefono}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getInteresBadgeVariant(inscripcion.interes)}>
                        {getInteresLabel(inscripcion.interes)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {inscripcion.sedes ? (
                        <span className="text-sm flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {inscripcion.sedes.nombre}
                        </span>
                      ) : (
                        <span className="text-muted-foreground text-sm">Sin sede</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(inscripcion.created_at).toLocaleDateString("es-PE")}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedInscripcion(inscripcion)}
                      >
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}

      {/* Detail Dialog */}
      <Dialog open={!!selectedInscripcion} onOpenChange={() => setSelectedInscripcion(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Detalle de Inscripción</DialogTitle>
          </DialogHeader>
          {selectedInscripcion && (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Nombre</p>
                <p className="font-medium">{selectedInscripcion.nombre}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${selectedInscripcion.email}`}
                    className="text-primary hover:underline"
                  >
                    {selectedInscripcion.email}
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <a
                    href={`tel:${selectedInscripcion.telefono}`}
                    className="text-primary hover:underline"
                  >
                    {selectedInscripcion.telefono}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Interés</p>
                  <Badge variant={getInteresBadgeVariant(selectedInscripcion.interes)}>
                    {getInteresLabel(selectedInscripcion.interes)}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sede</p>
                  <p>{selectedInscripcion.sedes?.nombre || "Sin sede"}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Mensaje</p>
                <Card className="p-3 mt-1 bg-muted/50">
                  <p className="text-sm whitespace-pre-wrap">{selectedInscripcion.mensaje}</p>
                </Card>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fecha de registro</p>
                <p>
                  {new Date(selectedInscripcion.created_at).toLocaleString("es-PE", {
                    dateStyle: "full",
                    timeStyle: "short",
                  })}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
