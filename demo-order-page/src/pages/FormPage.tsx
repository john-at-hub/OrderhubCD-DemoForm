import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
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
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FileInput } from '@/components/ui/FileInput'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProjectBucket from '@/components/custom/ProjectBucket'

type Props = {
  onSubmit: (data: any) => void
}

export const GeneratedForm = ({ onSubmit }: Props) => {
  const [step, setStep] = useState(0)
  const totalSteps = 2

  const form = useForm()

  const {
    handleSubmit,
    control,
    reset,
    getValues
  } = form

  const handleFinalSubmit = async (formData: any) => {
    if (step < totalSteps - 1) {
      setStep(step + 1)
    } else {
      console.log('Submitting full form data:', formData)
      onSubmit(formData) // 👈 Lift to parent
      setStep(0)
      reset()
      toast.success("Form successfully submitted")
    }
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  return (
    <div className="space-y-4">
      <ProjectBucket />
      <div className="flex items-center justify-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={cn(
                "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
                index <= step ? "bg-primary" : "bg-primary/30"
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
          <Form {...form}>
            <form onSubmit={handleSubmit(handleFinalSubmit)} className="grid gap-y-4">
              {step === 0 && (
                <>
                  <FormField
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                      </FormItem>
                    )}
                  />

                  <Select>
                    <SelectTrigger className="w-[360px]">
                      <SelectValue placeholder="Select Your Region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Regions</SelectLabel>
                        <SelectItem value="Carolinas">Carolinas</SelectItem>
                        <SelectItem value="Northern California">Northern California</SelectItem>
                        <SelectItem value="Denver">Denver</SelectItem>
                        <SelectItem value="Florida">Florida</SelectItem>
                        <SelectItem value="South Florida">South Florida</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="w-[360px]">
                      <SelectValue placeholder="Choose Market Segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Segments</SelectLabel>
                        <SelectItem value="Small">Small</SelectItem>
                        <SelectItem value="Emerging">Emerging</SelectItem>
                        <SelectItem value="Select">Select</SelectItem>
                        <SelectItem value="Key">Key</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <FormField
                    control={control}
                    name="clientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Client Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="orderSheet1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order Sheet 1 Upload</FormLabel>
                        <FormControl><FileInput {...field} /></FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="orderSheet2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Order Sheet 2 Upload</FormLabel>
                        <FormControl><FileInput {...field} /></FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <FormControl><Textarea {...field} rows={5} /></FormControl>
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 1 && (
                <FormField
                  control={control}
                  name="clientContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client Contact</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                    </FormItem>
                  )}
                />
              )}

              <div className="flex justify-between">
                <Button type="button" size="sm" onClick={handleBack} disabled={step === 0}>
                  Back
                </Button>
                <Button type="submit" size="sm">
                  {step === totalSteps - 1 ? 'Submit' : 'Next'}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}


// 'use client'

// import {
//   useState
// } from 'react'
// import {
//   useForm
// } from 'react-hook-form'
// import {
//   Button
// } from '@/components/ui/button'
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel
// } from '@/components/ui/form'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card'
// import {
//   toast
// } from 'sonner'
// import {
//   cn
// } from '@/lib/utils'
// import {
//   Input
// } from '@/components/ui/input'
// import {
//   Switch
// } from '@/components/ui/switch'
// import {
//   FileInput
// } from '@/components/ui/FileInput'
// import {
//   Textarea
// } from '@/components/ui/textarea'
// import {
//   Checkbox
// } from '@/components/ui/checkbox'
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import ProjectBucket from '@/components/custom/ProjectBucket'

// export const GeneratedForm = () => {
//   const [step, setStep] = useState(0)
//   const totalSteps = 2

//   const [formData, setFormData] = useState([{name: 'test1'}, {name: 'test2'}])
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function myHandleSubmit(e: React.FormEvent) {
//     e.preventDefault(); // Prevent page reload
//     const newEntry = {
//       firstName,
//       lastName,
//     };
//     setFormData(prev => [...prev, newEntry]);
//     // Clear the fields after submission if desired
//     setFirstName('');
//     setLastName('');
//   }

//   console.table(formData)

//   const form = useForm()

//   const {
//     handleSubmit,
//     control,
//     reset
//   } = form

//   const onSubmit = async (formData: any) => {
//     if (step < totalSteps - 1) {
//       setStep(step + 1)
//     } else {
//       console.log(formData)
  
//       // Add new entry to savedFormData state
//       const newEntry = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//       }
//       setFormData(prev => [...prev, newEntry])
  
//       setStep(0)
//       reset()
  
//       toast.success("Form successfully submitted")
//     }
//   }

//   const handleBack = () => {
//     if (step > 0) {
//       setStep(step - 1)
//     }
//   }

//   return (
//     <div className="space-y-4">
//         <ProjectBucket />
//           <div className="flex items-center justify-center">
//             {Array.from({ length: totalSteps }).map((_, index) => (
//               <div key={index} className="flex items-center">
//                 <div
//                   className={cn(
//                     "w-4 h-4 rounded-full transition-all duration-300 ease-in-out",
//                     index <= step ? "bg-primary" : "bg-primary/30",
//                     index < step && "bg-primary"
//                   )}
//                 />
//                 {index < totalSteps - 1 && (
//                   <div
//                     className={cn(
//                       "w-8 h-0.5",
//                       index < step ? "bg-primary" : "bg-primary/30"
//                     )}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//           <Card className="shadow-sm">
//             <CardHeader>
//               <CardTitle className="text-lg">Multi form</CardTitle>
//               <CardDescription>Current step {step + 1}</CardDescription>
//             </CardHeader>
//             <CardContent>
              
//         {step === 0 && (
//           <Form {...form}>
//             <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              
              
//     <FormField
//       key="firstName"
//       control={control}
//       name="firstName"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>First Name</FormLabel>
//           <FormControl>
//             <Input
//               {...field}
//               placeholder=""
//               autoComplete="off"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />
  

//     <FormField
//       key="lastName"
//       control={control}
//       name="lastName"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Last Name</FormLabel>
//           <FormControl>
//             <Input
//               {...field}
//               placeholder=""
//               autoComplete="off"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />

//     <FormField
//       key="mjZdGtNbd"
//       control={control}
//       name="mjZdGtNbd"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Email</FormLabel>
//           <FormControl>
//             <Input
//               {...field}
//               placeholder=""
//               autoComplete="off"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />

//     <FormField
//       key="mjZdGtNbe"
//       control={control}
//       name="mjZdGtNbe"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Phone</FormLabel>
//           <FormControl>
//             <Input
//               {...field}
//               placeholder=""
//               autoComplete="off"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />

//     <Select>
//       <SelectTrigger className="w-[360px]">
//         <SelectValue placeholder="Select Your Region" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Regions</SelectLabel>
//           <SelectItem value="Carolinas">Carolinas</SelectItem>
//           <SelectItem value="Northern California">Northern California</SelectItem>
//           <SelectItem value="Denver">Denver</SelectItem>
//           <SelectItem value="Florida">Florida</SelectItem>
//           <SelectItem value="South Florida">South Florida</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>

//     <Select>
//       <SelectTrigger className="w-[360px]">
//         <SelectValue placeholder="Choose Market Segment" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Segments</SelectLabel>
//           <SelectItem value="Small">Small</SelectItem>
//           <SelectItem value="Emerging">Emerging</SelectItem>
//           <SelectItem value="Select">Select</SelectItem>
//           <SelectItem value="key">Key</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
  

//     <FormField
//       key="cGSaniOb"
//       control={control}
//       name="cGSaniOb"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Client Name</FormLabel>
//           <FormControl>
//             <Input
//               {...field}
//               placeholder=""
//               autoComplete="off"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />
  
//     <FormField
//       key="JtDQjXXS"
//       control={control}
//       name="JtDQjXXS"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Order Sheet 1 Upload</FormLabel>
//           <FormControl>
//             <FileInput
//               value={field.value}
//               onChange={field.onChange}
//               accept="image/*, application/pdf"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />
  

//     <FormField
//       key="IjgcvbZL"
//       control={control}
//       name="IjgcvbZL"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Order Sheet 2 Upload</FormLabel>
//           <FormControl>
//             <FileInput
//               value={field.value}
//               onChange={field.onChange}
//               accept="image/*, application/pdf"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />
  

//     <FormField
//       key="WIhcQA9g"
//       control={control}
//       name="WIhcQA9g"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Notes</FormLabel>
//           <FormControl>
//             <Textarea
//               {...field}
//               placeholder=""
//               className="resize-none"
//               rows={5}
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />
  

//     <FormField
//       key="3vWdF56y"
//       control={control}
//       name="3vWdF56y"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Input 8</FormLabel>
//           <FormControl>
//             <FileInput
//               value={field.value}
//               onChange={field.onChange}
//               accept="image/*, application/pdf"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />
  
//               <div className="flex justify-between">
//                 <Button
//                   type="button"
//                   className="font-medium"
//                   size="sm"
//                   onClick={handleBack}
//                   disabled={step === 0}
//                 >
//                   Back
//                 </Button>
//                 <Button type="submit" size="sm" className="font-medium">
//                   {step === 1 ? 'Submit' : 'Next'}
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         )}
      

//         {step === 1 && (
//           <Form {...form}>
//             <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
              
              
//     <FormField
//       key="XlbKCRqq"
//       control={control}
//       name="XlbKCRqq"
//       render={({ field }) => (
//         <FormItem>
//           <FormLabel>Client Contact</FormLabel>
//           <FormControl>
//             <Input
//               {...field}
//               placeholder=""
//               autoComplete="off"
//             />
//           </FormControl>
//           <FormDescription></FormDescription>
//         </FormItem>
//       )}
//     />
   
//           <div className="flex justify-between">
//             <Button
//               type="button"
//               className="font-medium"
//               size="sm"
//               onClick={handleBack}
//               disabled={step === 0}
//             >
//               Back
//             </Button>
//             <Button type="submit" size="sm" className="font-medium">
//               {step === 1 ? 'Submit' : 'Next'}
//             </Button>
//           </div>
//         </form>
//       </Form>
//     )}
  
//         </CardContent>
//       </Card>
//     </div>
//   )
// }