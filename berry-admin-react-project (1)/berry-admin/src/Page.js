import { html } from "./html.js";
import { Dash } from "./pages/Dashboard.js";
import { Chat } from "./pages/Chat.js";
import { Kanban } from "./pages/Kanban.js";
import { Cal } from "./pages/Calendar.js";
import { Faq } from "./pages/FAQs.js";
import { Color } from "./pages/Color.js";
import { Typo } from "./pages/Typography.js";
import { Users } from "./pages/Users.js";
import { Generic } from "./pages/Generic.js";
import { Invoice } from "./pages/Invoice.js";
import { Customer } from "./pages/Customer.js";
import { Orders } from "./pages/Orders.js";
import { Ecommerce } from "./pages/Ecommerce.js";
import { DataGrid } from "./pages/DataGrid.js";
import { CRM } from "./pages/CRM.js";
import { Blog } from "./pages/Blog.js";
import { Mail } from "./pages/Mail.js";
import { Pricing } from "./pages/Pricing.js";
import { Statistics } from "./pages/Statistics.js";
import { Analytics } from "./pages/Analytics.js";
import { Charts } from "./pages/Charts.js";
import { Contact } from "./pages/Contact.js";
import { ContactUs } from "./pages/ContactUs.js";
import { Landing } from "./pages/Landing.js";
import { Docs } from "./pages/Docs.js";
import { Roadmap } from "./pages/Roadmap.js";
import { Privacy } from "./pages/Privacy.js";
import { Maintenance } from "./pages/Maintenance.js";
import { Auth } from "./pages/Auth.js";
import { Settings } from "./pages/Settings.js";
import { Validation } from "./pages/Validation.js";
import { Wizard } from "./pages/Wizard.js";
import { Map } from "./pages/Map.js";
import { Basic } from "./pages/Basic.js";
import { Advance } from "./pages/Advance.js";
import { Icons } from "./pages/Icons.js";
import { Shadow } from "./pages/Shadow.js";
import { FormsComp } from "./pages/FormsComp.js";

const ROUTES = {
  Default: Dash, Analytics, Invoice, CRM, Blog, Statistics, Data: DataGrid, Chart: Charts,
  Users, Customer, Order: Orders, Chat, Kanban, Mail, Calendar: Cal,
  Contact, "E-commerce": Ecommerce, Components: FormsComp, Table: DataGrid, "Data Grid": DataGrid,
  Charts, Map, "Forms Validation": Validation, "Forms Wizard": Wizard, Basic, Advance,
  Authentication: Auth, Pricing, Maintenance, Landing, "Contact US": ContactUs, FAQs: Faq,
  "Privacy Policy": Privacy, Typography: Typo, Color, Shadow, Icons,
  Documentation: Docs, Roadmap, "Account settings": Settings, "Social Profile": Settings,
};

export function Page({ p, go }) {
  const name = p.split("/").pop();
  const C = ROUTES[p.split("/")[0]] || Generic;
  return html`<${C} name=${name} go=${go}/>`;
}
