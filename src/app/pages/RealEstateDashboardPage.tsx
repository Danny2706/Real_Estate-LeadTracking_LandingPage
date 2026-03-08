import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Users,
  UserCheck,
  UserPlus,
  TrendingUp,
  ArrowLeft,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { StatsCard } from "../components/dashboard/StatsCard";
import { LeadTable, Lead } from "../components/dashboard/LeadTable";
import { LeadDetailModal } from "../components/dashboard/LeadDetailModal";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../components/utils/hooks";
import { logout } from "../components/features/authSlice";
import { toast } from "sonner";
import { Toaster } from "../components/ui/sonner";
import { LeadsChart } from "../components/dashboard/LeadsChart";
import { ConversionChart } from "../components/dashboard/ConversionChart";
import {
  getContacts,
  removeContact,
  changeStatus,
} from "../components/features/contactSlice";
import { CSVLink } from "react-csv";

export function RealEstateDashboardPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);
  const { leads, loading, totalPages } = useAppSelector(
    (state) => state.contact,
  );

  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(getContacts({ page: currentPage, limit: 10 }));
  }, [dispatch, currentPage]);

  const handleDeleteLead = async (id: string) => {
    try {
      await dispatch(removeContact(id)).unwrap();
      toast.success("Lead deleted successfully");
    } catch {
      toast.error("Failed to delete lead");
    }
  };

  const handleStatusChange = async (id: string, status: Lead["status"]) => {
    try {
      await dispatch(changeStatus({ id, status })).unwrap();
      toast.success("Lead status updated");
    } catch {
      toast.error("Failed to update status");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("Logged out successfully");
  };

  const stats = {
    totalLeads: leads.length,
    newLeads: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    converted: leads.filter((l) => l.status === "converted").length,
  };

  const csvData = leads.map((l) => ({
    "First Name": l.first_name,
    "Last Name": l.last_name,
    Email: l.email,
    Phone: l.phone,
    Interest: l.interest,
    Status: l.status,
    "Created At": new Date(l.created_at).toLocaleString(),
    Message: l.message,
  }));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-200 transition-colors duration-300">
      {/* HEADER */}
      <header className="bg-white dark:bg-gray-900/80 backdrop-blur-md shadow-md relative border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="gap-2 text-gray-900 dark:text-gray-100"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Lead Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Welcome back, {user?.email}
            </p>
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="text-2xl font-bold">
              <span className="text-blue-900 dark:text-blue-400">Prime</span>
              <span className="text-amber-600 dark:text-amber-400">Estate</span>
            </div>
            <CSVLink
              data={csvData}
              className="bg-blue-900 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-950 dark:hover:bg-blue-600 transition"
            >
              Export CSV
            </CSVLink>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="gap-2 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 dark:text-gray-100"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 shadow-md px-4 py-4 space-y-4">
            <div className="text-center text-xl font-bold">
              <span className="text-blue-900 dark:text-blue-400">Prime</span>
              <span className="text-amber-600 dark:text-amber-400">Estate</span>
            </div>
            <CSVLink
              data={csvData}
              className="block w-full text-center bg-blue-900 dark:bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-950 dark:hover:bg-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Export CSV
            </CSVLink>

            <Button
              variant="outline"
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="w-full gap-2 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Leads"
            value={stats.totalLeads}
            icon={Users}
            dark
          />
          <StatsCard
            title="New Leads"
            value={stats.newLeads}
            icon={UserPlus}
            dark
          />
          <StatsCard
            title="Contacted"
            value={stats.contacted}
            icon={UserCheck}
            dark
          />
          <StatsCard
            title="Converted"
            value={stats.converted}
            icon={TrendingUp}
            dark
          />
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LeadsChart dark />
          <ConversionChart dark />
        </div>

        {/* TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <LeadTable
            leads={leads.map((l) => ({
              id: l.id,
              firstName: l.first_name,
              lastName: l.last_name,
              email: l.email,
              phone: l.phone,
              interest: l.interest,
              message: l.message,
              status: l.status,
              createdAt: l.created_at,
            }))}
            onViewLead={(lead) => {
              setSelectedLead(lead);
              setIsModalOpen(true);
            }}
            onDeleteLead={handleDeleteLead}
            onStatusChange={handleStatusChange}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            dark
          />
        </motion.div>
      </main>

      <LeadDetailModal
        lead={selectedLead}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dark
      />

      <Toaster position="top-right" richColors />
    </div>
  );
}
