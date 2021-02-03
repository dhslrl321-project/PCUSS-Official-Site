import Sidebar from ".";

export default {
  title: "modules / Sidebar",
  component: Sidebar
}

export const Rendering = () => <Sidebar isOpen={true} toggle={true} />