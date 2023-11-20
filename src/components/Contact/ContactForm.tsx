import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Button, TextField } from "@mui/material";

export function ContactForms() {
	const [loading, setLoading] = useState(false);

	const validateSchema = Yup.object().shape({
		name: Yup.string().required("Esse campo é obrigatório"),

		email: Yup.string()
			.email("Digite um email valido")
			.required("Esse campo é obrigatório"),

		body: Yup.string().required("Esse campo é obrigatório"),
	});

	const formik = useFormik({
		initialValues: { name: "", email: "", body: "" },

		validationSchema: validateSchema,

		onSubmit: (values, { resetForm }) => {
			console.log(values);
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				resetForm();
			}, 1000 * 2);
		},
	});

	return (
		<>
			<h1 className="text-[1.4rem] font-bold text-slate-800 md:text-[1.8rem] lg:text-[1.9rem] xl:text-[2rem] text-start">
				Fale Conosco:
			</h1>

			<form
				className="flex justify-center justify-items-center flex-col mx-[5vw] gap-[1.5em] my-[5vh]"
				onSubmit={formik.handleSubmit}
			>
				<TextField
					aria-label="Campo nome de formulário de contatos"
					focused
					label={"Nome"}
					variant="outlined"
					name={"name"}
					onChange={formik.handleChange}
					value={formik.values.name}
					type={"name"}
					helperText={formik.errors.name ?? ""}
					error={formik.errors.name != undefined}
				/>

				<TextField
					aria-label="Campo email de formulário de contatos"
					focused
					label={"Email"}
					variant="outlined"
					type={"email"}
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					helperText={formik.errors.email ?? ""}
					error={formik.errors.email != undefined}
				/>

				<TextField
					aria-label="Campo mensagem de formulário de contatos"
					focused
					label={"Mensagem"}
					variant="outlined"
					type={"body"}
					name="body"
					onChange={formik.handleChange}
					value={formik.values.body}
					helperText={formik.errors.body ?? ""}
					error={formik.errors.body != undefined}
					multiline={true}
					rows={10}
				/>
				<Button disabled={loading} variant="contained" type={"submit"}>
					{loading ? (
						<p className="font-bold">Carregando...</p>
					) : (
						<p className="font-bold">Enviar</p>
					)}
				</Button>
			</form>
		</>
	);
}
