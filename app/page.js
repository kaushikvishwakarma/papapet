import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  redirect('/productdetail')
  return (
    <div>
      hi
    </div>
    );
}
