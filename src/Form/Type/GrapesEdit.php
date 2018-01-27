<?php

namespace Symfony\Cmf\Bundle\GrapesjsBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * @author Maximilian Berghoff <Maximilian.Berghoff@mayflower.de>
 */
class GrapesEdit extends AbstractType
{
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        parent::buildView($view, $form, $options);
        $view->vars['root_node'] = $options['root_node'];
        $view->vars['repository_name'] = $options['repository_name'];
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('root_node', '/');
        $resolver->setAllowedValues('root_node', function ($value) {
            return '/' === $value[0];
        });

        $resolver->setDefault('repository_name', 'default');
    }

    public function getBlockPrefix()
    {
        return 'cmf_grapes_edit';
    }

    public function getParent()
    {
        return TextType::class;
    }
}