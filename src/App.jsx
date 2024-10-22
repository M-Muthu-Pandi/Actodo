import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="bg-black p-16">
      <main className="bg-[#efefef] p-10 border rounded-md">
        {/* Header */}
        <Header />

        {/* Card */}
        <section className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:03:34"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </section>

        {/* Todo Container */}
        <TodoContainer />
      </main>
    </div>
  );
}

export default App;
