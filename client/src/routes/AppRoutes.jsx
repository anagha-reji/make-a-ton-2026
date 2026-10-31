import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../layouts/AdminLayout";
import StaffLayout from "../layouts/StaffLayout";
import CustomerLayout from "../layouts/CustomerLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";

import AdminDashboard from "../pages/admin/Dashboard";
import AdminStaff from "../pages/admin/Staff";
import AdminCustomers from "../pages/admin/Customers";
import AdminProducts from "../pages/admin/Products";
import AdminPlans from "../pages/admin/Plans";
import AdminReports from "../pages/admin/Reports";

import StaffDashboard from "../pages/staff/Dashboard";
import StaffCustomers from "../pages/staff/Customers";
import StaffQuotations from "../pages/staff/Quotations";
import StaffSubscriptions from "../pages/staff/Subscriptions";
import StaffInvoices from "../pages/staff/Invoices";

import CustomerDashboard from "../pages/customer/CustomerDashboard";
import BrowsePlans from "../pages/customer/BrowsePlans";
import MySubscriptions from "../pages/customer/MySubscriptions";
import MyInvoices from "../pages/customer/MyInvoices";
import MyPayments from "../pages/customer/MyPayments";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route element={<ProtectedRoute role="admin" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="staff" element={<AdminStaff />} />
          <Route path="customers" element={<AdminCustomers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="plans" element={<AdminPlans />} />
          <Route path="reports" element={<AdminReports />} />
        </Route>
      </Route>

      {/* Staff Routes */}
      <Route element={<ProtectedRoute role="staff" />}>
        <Route path="/staff" element={<StaffLayout />}>
          <Route index element={<StaffDashboard />} />
          <Route path="customers" element={<StaffCustomers />} />
          <Route path="quotations" element={<StaffQuotations />} />
          <Route path="subscriptions" element={<StaffSubscriptions />} />
          <Route path="invoices" element={<StaffInvoices />} />
        </Route>
      </Route>

      {/* Customer Routes */}
      <Route element={<ProtectedRoute role="customer" />}>
        <Route path="/customer" element={<CustomerLayout />}>
          <Route index element={<CustomerDashboard />} />
          <Route path="plans" element={<BrowsePlans />} />
          <Route path="subscriptions" element={<MySubscriptions />} />
          <Route path="invoices" element={<MyInvoices />} />
          <Route path="payments" element={<MyPayments />} />
        </Route>
      </Route>
    </Routes>
  );
}