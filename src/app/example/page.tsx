import { updateCookies } from "./actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { SubmitButton } from "../submit-button";

export default function NextJSFlicker() {
  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <form
        className="animate-in flex flex-col w-full px-5 sm:max-w-md sm:px-0 gap-2"
        action={updateCookies}
      >
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Minimal reproduction</CardTitle>
            <CardDescription>
              This minimal reproduction flickers when clicking on the "Update
              cookies" button.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SubmitButton className="mt-4">Update cookies</SubmitButton>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
