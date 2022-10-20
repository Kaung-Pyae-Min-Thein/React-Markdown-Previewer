import { Toolbar } from "../components";

export const MainLayout = (props) => {
  return (
    <main className="container">

      <div className="row justify-content-md-center">
        <div className="col-md-8">
          <Toolbar title="Editor" />
          {props.editor}
        </div>
      </div>

      <div className="row justify-content-md-center">
        <div className="col-md-12">
          <Toolbar title="Previewer" />
          {props.preview}
        </div>
      </div>

    </main>
  );

};