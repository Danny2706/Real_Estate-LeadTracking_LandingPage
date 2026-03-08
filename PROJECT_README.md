# Multi-Industry Landing Page System

This project contains **TWO complete landing page systems** - one for a **Gym/Fitness business** and one for **Real Estate**, each with their own lead management dashboards.

## 🎯 Project Structure

### **Gym Landing Page** (`/`)
- **Home**: `/` - Complete gym landing page with all sections
- **Login**: `/login` - Admin login for gym dashboard  
- **Dashboard**: `/dashboard` - Lead management for gym inquiries
- **Thank You**: `/thank-you` - Form submission confirmation

### **Real Estate Landing Page** (`/realestate`)
- **Home**: `/realestate` - Complete real estate landing page
- **Login**: `/realestate/login` - Admin login for property dashboard
- **Dashboard**: `/realestate/dashboard` - Lead management for property inquiries  
- **Thank You**: `/realestate/thank-you` - Form submission confirmation

## 🔐 Authentication

Both systems use the **same authentication credentials**:
- **Email**: `admin@fitlifegym.com`
- **Password**: `admin123`

Authentication state is shared and persists in localStorage.

## 🎨 Design Features

### Gym Landing Page (Red/Black Theme)
- Hero section with fitness imagery
- Features showcase
- Class offerings
- Membership pricing tiers
- Client testimonials
- Contact form
- Professional animations and hover effects

### Real Estate Landing Page (Navy/Gold Theme)
- Luxury hero with property search
- Featured property listings (6 properties)
- Comprehensive services section
- Achievement stats section
- Client testimonials
- Inquiry form with property interest options
- Premium animations and interactions

### Shared Dashboard Features
- 📊 **Analytics Charts** - Area chart for lead growth & pie chart for status distribution
- 📈 **Stats Cards** - Total leads, new leads, contacted, converted with trend indicators
- 🔍 **Lead Search** - Real-time search by name or email
- 🎯 **Status Filtering** - Filter leads by status (new, contacted, qualified, converted)
- 👁️ **Lead Details** - View full lead information in modal
- 🗑️ **Lead Management** - Delete leads with confirmation
- 🔔 **Toast Notifications** - Professional feedback for all actions
- 📱 **Responsive Design** - Works perfectly on all devices

## 🚀 Technologies Used

- **React 18** with TypeScript
- **Tailwind CSS v4** for styling
- **Motion (Framer Motion)** for animations
- **React Router v7** for navigation
- **Recharts** for data visualization
- **Sonner** for toast notifications
- **Lucide React** for icons
- **Radix UI** for accessible components

## 📁 File Structure

```
src/app/
├── components/
│   ├── realestate/          # Real estate specific components
│   │   ├── RealEstateHeader.tsx
│   │   ├── RealEstateHero.tsx
│   │   ├── FeaturedProperties.tsx
│   │   ├── RealEstateServices.tsx
│   │   ├── RealEstateStats.tsx
│   │   ├── RealEstateTestimonials.tsx
│   │   ├── RealEstateContact.tsx
│   │   └── RealEstateFooter.tsx
│   ├── dashboard/           # Shared dashboard components
│   │   ├── StatsCard.tsx
│   │   ├── LeadsChart.tsx
│   │   ├── ConversionChart.tsx
│   │   ├── LeadTable.tsx
│   │   ├── LeadDetailModal.tsx
│   │   └── EmptyState.tsx
│   ├── ui/                  # Shadcn UI components
│   └── [Gym components]     # Header.tsx, Hero.tsx, etc.
├── pages/
│   ├── HomePage.tsx                    # Gym home
│   ├── LoginPage.tsx                   # Gym login
│   ├── DashboardPage.tsx               # Gym dashboard
│   ├── ThankYouPage.tsx                # Gym thank you
│   ├── RealEstateHomePage.tsx          # Real estate home
│   ├── RealEstateLoginPage.tsx         # Real estate login
│   ├── RealEstateDashboardPage.tsx     # Real estate dashboard
│   └── RealEstateThankYouPage.tsx      # Real estate thank you
├── context/
│   └── AuthContext.tsx      # Shared authentication
└── routes.tsx               # All route definitions
```

## 💼 Fiverr-Ready Features

✅ **Professional Design** - Modern, clean, and polished UI  
✅ **Responsive Layout** - Mobile, tablet, and desktop optimized  
✅ **Smooth Animations** - Motion effects throughout  
✅ **Data Visualization** - Charts and graphs in dashboard  
✅ **Real-time Feedback** - Toast notifications for actions  
✅ **Search & Filter** - Advanced lead management  
✅ **Authentication** - Secure login system  
✅ **Empty States** - Thoughtful placeholder designs  
✅ **Loading States** - Better UX during operations  
✅ **Hover Effects** - Interactive elements throughout  
✅ **Clean Code** - Well-organized and maintainable  

## 🎯 Use Cases

This system is perfect for:
- **Freelance Projects** - Sell on Fiverr, Upwork, or Freelancer
- **Client Work** - Easy to customize for any gym or real estate business
- **Portfolio** - Showcase full-stack capabilities
- **Learning** - Study modern React patterns and best practices
- **Templates** - Use as starting point for similar industries

## 🔧 Customization

Each landing page can be easily customized:
- Change colors in component files
- Update content in page components
- Add/remove sections as needed
- Modify form fields
- Adjust animations timing
- Replace mock data with real API calls

## 📝 Notes

- Authentication is currently mock-based (localStorage)
- Lead data is stored in component state (not persisted)
- Ready for Supabase or other backend integration
- All images use Unsplash for demo purposes
- Forms are functional and redirect properly

---

**Perfect for selling on Fiverr at $500-$1500+ price points!**
