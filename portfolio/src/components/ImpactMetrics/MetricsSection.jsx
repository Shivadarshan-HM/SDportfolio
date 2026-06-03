import React from 'react';
import { metrics } from '../../data/metrics';
import MetricCard from './MetricCard';

const MetricsSection = ({ refs }) => {
  const {
    metric1Ref, count1Ref,
    metric2Ref, count2Ref,
    metric3Ref, count3Ref,
    metric4Ref, count4Ref
  } = refs;

  const metricRefs = [
    { container: metric1Ref, count: count1Ref },
    { container: metric2Ref, count: count2Ref },
    { container: metric3Ref, count: count3Ref },
    { container: metric4Ref, count: count4Ref },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 md:px-16 pb-24 md:pb-32 z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {metrics.map((metric, index) => (
          <MetricCard 
            key={metric.id}
            metric={metric}
            containerRef={metricRefs[index].container}
            countRef={metricRefs[index].count}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
