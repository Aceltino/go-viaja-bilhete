import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import DashboardCliente from "@/components/dashboards/DashboardCliente";
import DashboardEmpresa from "@/components/dashboards/DashboardEmpresa";
import DashboardAdmin from "@/components/dashboards/DashboardAdmin";

export default function Dashboard() {
  const { user, userRole, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  if (loading || !userRole) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Render appropriate dashboard based on role
  switch (userRole) {
    case "admin":
      return <DashboardAdmin />;
    case "empresa":
      return <DashboardEmpresa />;
    case "cliente":
    default:
      return <DashboardCliente />;
  }
}
