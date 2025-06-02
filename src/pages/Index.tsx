import React from 'react';
import MainAppLayout from '../../components/layout/MainAppLayout';
import MetricsGrid from '../../components/Dashboard/MetricsGrid';
import ProductSalesChart from '../../components/Dashboard/ProductSalesChart';
import TotalProductsCard from '../../components/Dashboard/TotalProductsCard';
import WebsiteTrafficChart from '../../components/Dashboard/WebsiteTrafficChart';
import ScoreCards from '../../components/Dashboard/ScoreCards';

/**
 * WeeklyStatusDashboardPage
 * 
 * This page displays the main dashboard content, including metrics, charts, and score cards.
 * It uses the AdminLayout (implemented as MainAppLayout) to provide the overall page structure
 * with a sidebar and top header.
 * 
 * The main content area is structured as a responsive grid:
 * - On medium screens and wider (md:), it's a 2-column grid.
 * - On smaller screens, it stacks into a single column.
 *
 * Components are arranged as follows:
 * 1. MetricsGrid: Spans the full width (2 columns on md+).
 * 2. ProductSalesChart: Occupies the first column on md+.
 * 3. TotalProductsCard: Occupies the second column on md+.
 * 4. WebsiteTrafficChart: Spans the full width (2 columns on md+).
 * 5. ScoreCards: Spans the full width (2 columns on md+).
 */
const WeeklyStatusDashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Row 1: MetricsGrid spanning 2 columns on medium screens and up */}
        <div className="md:col-span-2">
          <MetricsGrid />
        </div>
        
        {/* Row 2: ProductSalesChart and TotalProductsCard in respective columns on medium screens and up */}
        <ProductSalesChart />
        <TotalProductsCard />
        
        {/* Row 3: WebsiteTrafficChart spanning 2 columns on medium screens and up */}
        <div className="md:col-span-2">
          <WebsiteTrafficChart />
        </div>
        
        {/* Row 4: ScoreCards spanning 2 columns on medium screens and up */}
        <div className="md:col-span-2">
          <ScoreCards />
        </div>
      </div>
    </MainAppLayout>
  );
};

export default WeeklyStatusDashboardPage;
