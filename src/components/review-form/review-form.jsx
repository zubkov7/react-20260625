import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setName, setAddress, setText } = useForm();

  const { name, text, address } = form;

  return (
    <form>
      <div>
        <span>name</span>
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div>
        <span>text</span>
        <input value={text} onChange={(event) => setText(event.target.value)} />
      </div>
      <div>
        <span>address</span>
        <input
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
    </form>
  );
};
