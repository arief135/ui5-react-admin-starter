import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar, Badge, Breadcrumbs, BreadcrumbsItem, Button, DynamicPage, DynamicPageHeader, DynamicPageTitle, FlexBox, FlexBoxDirection, Label, MessageStrip, ObjectStatus, ShellBar, SideNavigation, SideNavigationItem, SideNavigationSubItem, Table, TableCell, TableColumn, TableRow, Title, Text } from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/home.js";
import "@ui5/webcomponents-icons/dist/group.js";
import "@ui5/webcomponents-icons/dist/locate-me.js";
import "@ui5/webcomponents-icons/dist/calendar.js";
import "@ui5/webcomponents-icons/dist/chain-link.js";
import "@ui5/webcomponents-icons/dist/history.js";
import { ProductCollection } from './products.json';

function App() {

  return (
    <>
      <div className='applicationWrapper'>
        <div className='headerWrapper'>
          <ShellBar
            logo={
              <img
                src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
                alt={'UI5 Web Components for React logo'}
              />
            }
            primaryTitle="UI5 Web Components for React Template"
            profile={<Avatar icon={employeeIcon} />}
          />
        </div>

        <div className='bodyWrapper'>
          <div className='sidebarWrapper'>
            <SideNavigation
              fixedItems={<><SideNavigationItem href="https://www.sap.com/index.html" icon="chain-link" target="_blank" text="External Link" /><SideNavigationItem icon="history" text="History" /></>}
              onSelectionChange={function _a() { }}
              style={{ borderRadius: 0 }}
            >
              <SideNavigationItem
                icon="home"
                text="Home"
              />
              <SideNavigationItem
                expanded
                icon="group"
                text="People"
              >
                <SideNavigationSubItem text="From My Team" />
                <SideNavigationSubItem text="From Other Teams" />
              </SideNavigationItem>
              <SideNavigationItem
                icon="locate-me"
                selected
                text="Locations"
              />
              <SideNavigationItem
                icon="calendar"
                text="Events"
              >
                <SideNavigationSubItem text="Local" />
                <SideNavigationSubItem text="Others" />
              </SideNavigationItem>
            </SideNavigation>
          </div>
          <div className='contentWrapper'>
            <DynamicPage
              headerContent={<DynamicPageHeader><FlexBox wrap="Wrap"><FlexBox direction="Column"><Label>Location: Warehouse A</Label><Label>Halway: 23L</Label><Label>Rack: 34</Label></FlexBox><span style={{ width: '1rem' }} /><FlexBox direction="Column"><Label>Availability:</Label><ObjectStatus state="Success">In Stock</ObjectStatus></FlexBox></FlexBox></DynamicPageHeader>}
              headerTitle={<DynamicPageTitle actions={<><Button design="Emphasized">Edit</Button><Button design="Transparent">Delete</Button><Button design="Transparent">Copy</Button><Button design="Transparent" icon="action" /></>} breadcrumbs={<Breadcrumbs><BreadcrumbsItem>Home</BreadcrumbsItem><BreadcrumbsItem>Page 1</BreadcrumbsItem><BreadcrumbsItem>Page 2</BreadcrumbsItem></Breadcrumbs>} expandedContent={<MessageStrip>Information (only visible if header content is expanded)</MessageStrip>} header={<Title>Header Title</Title>} navigationActions={<><Button design="Transparent" icon="full-screen" /><Button design="Transparent" icon="exit-full-screen" /><Button design="Transparent" icon="decline" /></>} snappedContent={<MessageStrip>Information (only visible if header content is collapsed/snapped)</MessageStrip>} subHeader={<Label>This is a sub header</Label>}><Badge>Status: OK</Badge></DynamicPageTitle>}
              onPinnedStateChange={function _a() { }}
              onToggleHeaderContent={function _a() { }}
            >

              <Table
                columns={
                  <>
                    <TableColumn>Product</TableColumn>
                    <TableColumn>Supplier</TableColumn>
                    <TableColumn>Dimensions</TableColumn>
                    <TableColumn>Price</TableColumn>
                  </>
                }
              >
                {ProductCollection.map((product) => {
                  return (
                    <TableRow key={product.ProductId}>
                      <TableCell>
                        <FlexBox direction={FlexBoxDirection.Column}>
                          <Text>{product.Name}</Text>
                          <Label>{product.ProductId}</Label>
                        </FlexBox>
                      </TableCell>
                      <TableCell>
                        <Label>{product.SupplierName}</Label>
                      </TableCell>
                      <TableCell>
                        <Label>
                          {product.Width} x {product.Depth} x {product.Height} cm
                        </Label>
                      </TableCell>
                      <TableCell>
                        <Label>{product.Price} EUR</Label>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </Table>

            </DynamicPage>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
