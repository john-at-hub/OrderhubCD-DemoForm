// import { useState } from "react"

// function FormPage() {
 
//   const [testData, setTestData] = useState([
//     {
//       name: 'Jolly',
//       number: 431,
//       locations: 'San Antonio, TX',
//       id: 1
//     },
//     {
//       name: 'Amber',
//       number: 64,
//       locations: 'Midland, TX',
//       id: 2
//     },
//   ])

//   const displayData = testData.map(item => <p key={item.id}>{item.name}</p>)
       

//     return (
//       <>        
//         <h2 className="text-3xl font-bold underline">This is the form testing Page</h2>
//         {displayData}
//       </>
//     )
// }

// export default FormPage

'use client'

import {
  useState
} from 'react'
import {
  useForm
} from 'react-hook-form'
import {
  Button
} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  toast
} from 'sonner'
import {
  cn
} from '@/lib/utils'
import {
  Input
} from '@/components/ui/input'
import {
  Switch
} from '@/components/ui/switch'
import {
  FileInput
} from '@/components/ui/FileInput'
import {
  Textarea
} from '@/components/ui/textarea'
import {
  Checkbox
} from '@/components/ui/checkbox'

export const GeneratedForm = () => {
  const [step, setStep] = useState(0)
  const totalSteps = 2

  const [formData, setFormData] = useState([{name: 'test1'}, {name: 'test2'}])

  console.table(formData)

  const form = useForm()

  const {
    handleSubmit,
    control,
    reset
  } = form

  const onSubmit = async (formData: unknown) => {
    if (step < totalSteps - 1) {
      setStep(step + 1)
    } else {
      console.log(formData)
      setStep(0)
      reset()

      toast.success("Form successfully submitted")
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className="space-y-4">
          <div className="flex items-center justify-center">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
                    index <= step ? "bg-primary" : "bg-primary/30",
                    index < step && "bg-primary"
                  )}
                />
                {index < totalSteps - 1 && (
                  <div
                    className={cn(
                      "w-8 h-0.5",
                      index < step ? "bg-primary" : "bg-primary/30"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Multi form</CardTitle>
              <CardDescription>Current step {step + 1}</CardDescription>
            </CardHeader>
            <CardContent>
              
        {step === 0 && (
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              
              
    <FormField
      key="Y3JX9JBZ"
      control={control}
      name="Y3JX9JBZ"
      render={({ field }) => (
        <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder=""
              autoComplete="off"
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  

    <FormField
      key="mjZdGtNb"
      control={control}
      name="mjZdGtNb"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Last Name</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder=""
              autoComplete="off"
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  

    <FormField
      key="cGSaniOb"
      control={control}
      name="cGSaniOb"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Client Name</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder=""
              autoComplete="off"
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  

    <FormField
      key="o5vWLo0B"
      control={control}
      name="o5vWLo0B"
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">Required Test Switch</FormLabel>
            <FormDescription></FormDescription>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  

    <FormField
      key="JtDQjXXS"
      control={control}
      name="JtDQjXXS"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Order Sheet 1 Upload</FormLabel>
          <FormControl>
            <FileInput
              value={field.value}
              onChange={field.onChange}
              accept="image/*, application/pdf"
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  

    <FormField
      key="IjgcvbZL"
      control={control}
      name="IjgcvbZL"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Order Sheet 2 Upload</FormLabel>
          <FormControl>
            <FileInput
              value={field.value}
              onChange={field.onChange}
              accept="image/*, application/pdf"
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  

    <FormField
      key="WIhcQA9g"
      control={control}
      name="WIhcQA9g"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Notes</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              placeholder=""
              className="resize-none"
              rows={5}
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  

    <FormField
      key="3vWdF56y"
      control={control}
      name="3vWdF56y"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Input 8</FormLabel>
          <FormControl>
            <FileInput
              value={field.value}
              onChange={field.onChange}
              accept="image/*, application/pdf"
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  
              <div className="flex justify-between">
                <Button
                  type="button"
                  className="font-medium"
                  size="sm"
                  onClick={handleBack}
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button type="submit" size="sm" className="font-medium">
                  {step === 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      

        {step === 1 && (
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              
              
    <FormField
      key="XlbKCRqq"
      control={control}
      name="XlbKCRqq"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Client Contact</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder=""
              autoComplete="off"
            />
          </FormControl>
          <FormDescription></FormDescription>
        </FormItem>
      )}
    />
  

    <FormField
      key="3rIgo6rp"
      control={control}
      name="3rIgo6rp"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Type of Deliverable needed</FormLabel>
            <FormDescription></FormDescription>
          </div>
        </FormItem>
      )}
    />
  
              <div className="flex justify-between">
                <Button
                  type="button"
                  className="font-medium"
                  size="sm"
                  onClick={handleBack}
                  disabled={step === 0}
                >
                  Back
                </Button>
                <Button type="submit" size="sm" className="font-medium">
                  {step === 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </Form>
        )}
      
            </CardContent>
          </Card>
        </div>
  )
}