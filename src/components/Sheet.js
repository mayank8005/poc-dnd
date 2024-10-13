import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GridLayout, { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function Sheet({ activeComponents = [] }) {
  const [layoutComponents, setLayoutComponents] = useState([]);
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    setLayoutComponents(prevComponents => {
      const existingIds = new Set(prevComponents.map(comp => comp.id));
      const newComponents = activeComponents.filter(comp => !existingIds.has(comp.id));
      
      if (newComponents.length > 0) {
        const updatedComponents = [...prevComponents, ...newComponents];
        
        // Update layout state
        setLayout(updatedComponents.map((comp, index) => ({
          i: comp.id.toString(),
          x: (index * 2) % 12,
          y: Math.floor(index / 6) * 2,
          w: 2,
          h: 10,
          component: comp.component
        })));

        return updatedComponents;
      }
      
      return prevComponents;
    });
  }, [activeComponents]);

  return (
    <div className="a4-sheet">
      <ResponsiveGridLayout
        className="layout"
        minHeight={1000}
        layout={layout}
        rowHeight={50} // Increased row height for better visibility
        width={900}
        style={{ minHeight: '1000px' }} 
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} // Define breakpoints
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }} // Define columns for each breakpoint
        compactType={null}
        verticalCompact = {true}
      >
        {layout.map((item) => (
          <div key={item.i}>
            <item.component />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

Sheet.propTypes = {
  activeComponents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      component: PropTypes.elementType.isRequired
    })
  )
};

export default Sheet;
