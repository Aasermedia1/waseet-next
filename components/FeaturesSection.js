// components/FeaturesSection.js
import React from 'react'

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <h2 className="text-center text-3xl font-bold mb-6">كل اللي محتاجه لنجاح بيزنسك</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div className="feature-card">
          <div className="icon">
            {/* Add an icon */}
          </div>
          <p>محادثات 24/7</p>
        </div>
        <div className="feature-card">
          <div className="icon">
            {/* Add an icon */}
          </div>
          <p>إدارة الطلبات</p>
        </div>
        <div className="feature-card">
          <div className="icon">
            {/* Add an icon */}
          </div>
          <p>تقارير دقيقة</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
