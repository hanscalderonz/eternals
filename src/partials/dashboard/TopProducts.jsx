import React from 'react';

function TopProducts() {

  const products = [
    {
      id: '0',
      name: 'Leche deslactosada larga vida tetrapack',
      itemOSS: '518',
    },
    {
      id: '1',
      name: 'Jugo de naranja',
      itemOSS: '72',
     
    },
    {
      id: '2',
      name: 'Bebida de almendras sin azucar',
      itemOSS: '72',
      
    },
    {
        id: '3',
        name: 'Bolsa plastica D1',
        itemOSS: '32',
        
      },
    
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">TOP 10 - Productos vendidos</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Producto</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left"># Item OSS</div>
                </th>
                
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                products.map(product => {
                  return (
                    <tr key={product.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                      
                          <div className="font-medium text-slate-800">{product.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{product.itemOSS}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default TopProducts;
