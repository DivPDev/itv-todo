
export default function BuggyComponent() {

    const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={() => {
            if(count>=3) {
                throw new Error("Count exceeded");
            } else {
                setCount(count+1);
            }
        }}>click</button>
    </div>
  )
}
