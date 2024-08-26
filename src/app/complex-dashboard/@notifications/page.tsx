import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <>
      <Card>
        <div>notifications</div>
        <Link href="/complex-dashboard/archieved">Archieved</Link>
      </Card>
    </>
  );
}
