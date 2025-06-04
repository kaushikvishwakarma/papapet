'use client'
import React, { useState } from 'react';
import { 
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function OrderHistoryPage() {
  // Sample order data stored in array
 const [orders] = useState([
  {
    id: '#A100001',
    status: 'IN PROGRESS',
    statusColor: 'text-orange-500',
    date: 'May 12, 2025 10:45',
    total: '$120',
    products: 3
  },
  {
    id: '#A100002',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'Apr 20, 2025 18:30',
    total: '$75',
    products: 2
  },
  {
    id: '#A100003',
    status: 'CANCELED',
    statusColor: 'text-red-500',
    date: 'Mar 5, 2025 09:15',
    total: '$1,450',
    products: 5
  },
  {
    id: '#A100004',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'Feb 28, 2025 21:10',
    total: '$210',
    products: 4
  },
  {
    id: '#A100005',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'Jan 14, 2025 16:00',
    total: '$325',
    products: 3
  },
  {
    id: '#A100006',
    status: 'CANCELED',
    statusColor: 'text-red-500',
    date: 'May 1, 2025 14:22',
    total: '$90',
    products: 1
  },
  {
    id: '#A100007',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'Mar 30, 2025 11:05',
    total: '$580',
    products: 6
  },
  {
    id: '#A100008',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'Apr 10, 2025 19:30',
    total: '$135',
    products: 2
  },
  {
    id: '#A100009',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'Feb 22, 2025 08:40',
    total: '$1,050',
    products: 7
  },
  {
    id: '#A100010',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'May 3, 2025 20:55',
    total: '$1,300',
    products: 5
  },
  {
    id: '#A100011',
    status: 'CANCELED',
    statusColor: 'text-red-500',
    date: 'Apr 18, 2025 13:45',
    total: '$430',
    products: 2
  },
  {
    id: '#A100012',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    date: 'Mar 1, 2025 17:10',
    total: '$90',
    products: 1
  }
]);


  const [paginationPages] = useState([
    { number: '01', active: true },
    { number: '02', active: false },
    { number: '03', active: false },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const getCurrentPageOrders = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orders.slice(startIndex, endIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-8">
            <h1 className="text-xl font-semibold text-gray-800 mb-8">ORDER HISTORY</h1>
            
            
            <div className="overflow-x-auto">
              <table className="w-full">

                <thead>
                  <tr className="border-b border-gray-200">

                    <th className="text-left py-4 px-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
                      ORDER ID
                    </th>
                    
                    <th className="text-left py-4 px-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
                      STATUS
                    </th>
                    
                    <th className="text-left py-4 px-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
                      DATE
                    </th>
                    
                    <th className="text-left py-4 px-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
                      TOTAL
                    
                    </th>
                    
                    <th className="text-left py-4 px-2 text-sm font-medium text-gray-600 uppercase tracking-wider">
                      ACTION
                    
                    </th>
                  
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {getCurrentPageOrders().map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-2">
                        <span className="text-sm font-medium text-gray-800">{order.id}</span>
                      </td>

                      <td className="py-4 px-2">
                        <span className={`text-sm font-medium ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </td>
                      
                      <td className="py-4 px-2">
                        <span className="text-sm text-gray-600">{order.date}</span>
                      </td>
                      
                      <td className="py-4 px-2">
                        <span className="text-sm text-gray-800">
                          {order.total} ({order.products} Products)
                        </span>
                      
                      </td>
                      
                      <td className="py-4 px-2">
                        <button className="flex items-center space-x-1 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      
                      </td>
                    
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

           
            <div className="flex items-center justify-center space-x-2 mt-8">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {paginationPages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(parseInt(page.number))}
                  className={`w-10 h-10 rounded-full font-medium transition-colors ${
                    currentPage === parseInt(page.number)
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {page.number}
                </button>
              ))}
              
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}