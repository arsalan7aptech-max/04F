import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Minus, RotateCcw } from "lucide-react";

 function DashboardContact() {
  const [counter,setCounter]=useState(0)
  function increment(){
    setCounter(counter+1)
    // console.log(counter);
    
  }

  function decrease(){
    if(counter>0){
    setCounter(counter-1)
  }else{
    setCounter(0)
  }
  }
  function reset(){
    setCounter(0)
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-xs text-center">
        <CardHeader>
          <CardTitle>Counter</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-6xl font-bold tracking-tight">
            {counter}
          </div>

          <div className="flex items-center justify-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={decrease}
            >
              <Minus className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={increment}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <Button
            variant="ghost"
            className="w-full"
            onClick={reset}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </CardContent>
      </Card>
    </div> 
  )
}

export default DashboardContact