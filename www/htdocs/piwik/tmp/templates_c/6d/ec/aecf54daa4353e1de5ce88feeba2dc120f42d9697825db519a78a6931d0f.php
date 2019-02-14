<?php

/* @CoreHome/_singleReport.twig */
class __TwigTemplate_6decaecf54daa4353e1de5ce88feeba2dc120f42d9697825db519a78a6931d0f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<h2>";
        echo twig_escape_filter($this->env, (isset($context["title"]) ? $context["title"] : $this->getContext($context, "title")), "html", null, true);
        echo "</h2>
";
        // line 2
        echo (isset($context["report"]) ? $context["report"] : $this->getContext($context, "report"));
    }

    public function getTemplateName()
    {
        return "@CoreHome/_singleReport.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  24 => 2,  19 => 1,);
    }
}
