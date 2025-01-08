import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const items = [
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Settings', icon: 'pi pi-cog' },
    { label: 'Logout', icon: 'pi pi-sign-out' },
  ];

  const data = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 40 },
  ];

  return (
    <div className="container-fluid">
      {/* Barra de navegação superior */}
      <div className="p-col-12">
        <Menubar model={items} />
      </div>

      {/* Sidebar */}
      <Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)}>
        <h3>Admin Menu</h3>
        <Button label="Close" icon="pi pi-times" onClick={() => setSidebarVisible(false)} />
      </Sidebar>

      {/* Conteúdo principal */}
      <div className="col-12 col-md-9">
        <div className="d-flex justify-content-center align-content-center">
          <Button
            label="Toggle Sidebar"
            icon="pi pi-bars"
            onClick={() => setSidebarVisible(true)}
            className="mr-2 btn btn-primary"
          />
        </div>

        {/* Cards com informações */}
        <div className="grid mt-4">
          <div className="col-8 md-4">
            <Card title="Total Sales" subTitle="Overview" className="p-mb-4">
              <p>Sales: $1200</p>
            </Card>
          </div>
          <div className="col-8 col-md-4">
            <Card title="Orders" subTitle="Overview" className="p-mb-4">
              <p>Orders: 150</p>
            </Card>
          </div>
          <div className="col-10 col-md-4">
            <Card title="Customers" subTitle="Overview"  className="p-mb-4">
              <div className="card">
                <div className="card-body">
                 <img src="vite.svg" alt=""  className='card-img'/>
                  <p className='card-title'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit consequatur sequi culpa laborum, molestias eos reprehenderit non veniam tenetur, deserunt nostrum illum est neque labore ratione quae. Deleniti, molestias.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Tabela de dados */}
        <h3>Product List</h3>
        <DataTable value={data} className=''>
          <Column field="id" header="ID" />
          <Column field="name" header="Product Name" />
          <Column field="price" header="Price" />
        </DataTable>
      </div>
    </div>
  );
};

export default App;
