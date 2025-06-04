import React from 'react';
import { 
  CheckCircle, 
  Package, 
  Truck, 
  MapPin, 
  Calendar,
  User,
  Phone,
  Mail,
  ChevronLeft
} from 'lucide-react';



export default function TrackOrderSection() {
  const orderData = {
    id: '#11111',
    products: 4,
    date: '17 Jan, 2021 at 7:32 PM',
    total: '$99999.00',
    expectedArrival: '23 Jan, 2021'
  };


  const orderActivity = [
    {
      id: 1,
      title: 'loren ipsum',
      time: '3 june, 2025 at 7:32 AM',
      icon: CheckCircle,
      completed: true,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500'
    },
    {
      id: 2,
      title: 'loren ipsum',
      time: '3 june, 2025 at 7:32 AM',
      icon: User,
      completed: true,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    {
      id: 3,
      title: 'loren ipsum.',
      time: '3 june, 2025 at 7:32 AM',
      icon: MapPin,
      completed: true,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    
  ];

  const products = [
    {
      id: 1,
    // add details of product
    },
    {
      id: 2,
      name: 'iphone18pro',
      category: 'Mobile Phone',
      price: '$39',
      quantity: 'x1',
      subtotal: '$39',
      image: '/api'
    }
  ];

 

  
  const ProgressStep = ({ icon: Icon, label, isActive, isCompleted }) => (
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isCompleted ? 'bg-orange-500 text-white' : 
        isActive ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-400'
      }`}>
        <Icon size={20} />
      </div>
      <span className={`text-xs mt-2 ${
        isCompleted || isActive ? 'text-orange-500 font-medium' : 'text-gray-400'
      }`}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="max-w-6xl mx-auto p-6">
      
        <div className="flex items-center mb-6">
          <ChevronLeft className="w-5 h-5 text-gray-600 mr-2" />
          <span className="text-gray-600 font-medium">ORDER DETAILS</span>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
      
          <div className="flex justify-between items-start">
      
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{orderData.id}</h1>
              <p className="text-gray-600">
                {orderData.products} Products • Order Placed in {orderData.date}
      
              </p>
            </div>
      
            <div className="text-right">
              <span className="text-3xl font-bold text-blue-500">{orderData.total}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Order expected arrival <span className="font-semibold">{orderData.expectedArrival}</span>
          </p>
        </div>

        
        <div className="bg-white rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-8">
            <ProgressStep 
              icon={CheckCircle} 
              label="Order Placed" 
              isCompleted={true}
            />
            <div className="flex-1 h-1 bg-orange-500 mx-4"></div>
            <ProgressStep 
              icon={Package} 
              label="Packaging" 
              isCompleted={true}
            />
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <ProgressStep 
              icon={Truck} 
              label="On Road" 
              isActive={false}
            />
            <div className="flex-1 h-1 bg-gray-200 mx-4"></div>
            <ProgressStep 
              icon={CheckCircle} 
              label="Delivered" 
              isActive={false}
            />
          </div>
        </div>

        





        <div className="bg-white rounded-lg p-6 mb-6">
          
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Activity</h2>

          <div className="space-y-4">
          
            {orderActivity.map((activity) => {
              
              const IconComponent = activity.icon;
          

              return (

                <div key={activity.id} className={`flex items-start p-4 rounded-lg ${activity.bgColor}`}>
              
                  <div className={`p-2 rounded-full ${activity.iconColor} mr-4`}>
                    <IconComponent size={20} />
                  </div>
              
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium mb-1">{activity.title}</p>
                    <p className="text-gray-500 text-sm">{activity.time}</p>
                  </div>
              
              
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
}