import { checkToken } from "../../utilities/users-service";

function OrderHistoryPage() {
  const handleCheckToken = async () => {
    const expDate = await checkToken();
    alert(expDate);
  };

  return (
    <div>
      <h1>This is the OrderHistory page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}

export default OrderHistoryPage;
